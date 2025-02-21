import "./Books.scss";
import { BookCard, SelectBox, SkeletonLoader } from "../../../components";
// import data from "../../../data/mock-data.json";
import useNavigationHook from "../../../redux/hooks/navigationHook";
import { useQuery } from "@tanstack/react-query";
import { HTTPRequest } from "../../../HttpRequests/HTTPRequest";
import { API } from "../../../Helper/apiUrl";
import { KeyMapper } from "../../../KeyMapper";
import { sortSelectData } from "../../../data/data";;
import { useEffect } from "react";
import { SelectChangeEvent } from "@mui/material";
import { setBookList, setSelectedSortText, sortBookList, toggleBookListLoading } from "../../../redux/slices/BookListPageSlice/BookListPageSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hook";
import { debounceCall } from "../../../Helper/Helper";
import SearchField from "../../../components/SearchField/SearchField";
import Error from "../../Error/Error";
const Books = () => {

    const { goTo } = useNavigationHook();
    const dispatch = useAppDispatch();
    const { bookList, selectedSortText, isBooksLoading } = useAppSelector(state => state.BookListPageSlice);

    const { data, isLoading, isError, isSuccess } = useQuery({
        queryKey: [KeyMapper.ReactQueryKeys.BOOKLIST],
        queryFn: () => HTTPRequest.get(API.bookDataUrl),
        retry: 3,
        retryDelay: (attempt) => Math.min(5000 * attempt, 15000),
        refetchOnWindowFocus: false, //prevent refetching when switching tabs by default is true
        refetchOnReconnect: true, // Refetches only when network is reconnected
    })

    useEffect(() => {
        if (data) {
            dispatch(setBookList(data));
        }
    }, [data, isSuccess])

    const handleClick = (id: string) => {
        goTo(id);
    }

    if (isLoading || isBooksLoading) {
        return (
            <div className="books-list-main-container">
                {Array.from({ length: 30 }).map((_, index) => <SkeletonLoader key={index} />)}
            </div>
        )
    }

    if (isError) {
        return <Error isFeedError={true}  />
    }

    const handleChange = (event: SelectChangeEvent) => {
        dispatch(toggleBookListLoading());
        dispatch(setSelectedSortText(event.target.value));
        dispatch(sortBookList(event.target.value));
        debounceCall(500, () => {
            dispatch(toggleBookListLoading());
        })
    }

    const handleSearch = (value: string) => {
        console.log(value)
    }

    return (
        <div className="books-main-container">
            <div className="books-search-sort-container">
                <div className="books-searchboxContainer">
                    <SearchField size="small" placeholder="Search by Title/Author or Genre..." handleSearch={handleSearch} />
                </div>
                <div className="books-sort-box-container">
                    <SelectBox title="sort by" selectedText={selectedSortText} onChange={(event: any) => handleChange(event)} options={sortSelectData} />
                </div>
            </div>
            <div className="books-list-main-container">
                {(bookList && bookList.length >= 1) && bookList?.map((book: any) => {
                    return (
                        <BookCard {...book} key={book.id} handleClick={handleClick} />
                    )
                })}
            </div>
        </div>
    )
}

export default Books
