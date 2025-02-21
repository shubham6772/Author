import { createSlice } from "@reduxjs/toolkit";
import { KeyMapper } from "../../../KeyMapper";

interface bookListPageSliceStates {
    bookList: Array<any>,
    backupBookList: Array<any>,  // To store the original bookList before any changes were made.
    selectedSortText: string,
    isBooksLoading: boolean,

}

const initialState: bookListPageSliceStates = {
    bookList: [],
    backupBookList : [],
    selectedSortText: '',
    isBooksLoading: false,
}

const BookListPageSlice = createSlice({
    name: 'BookListPageSlice',
    initialState,
    reducers: {
        setBookList: (state, action) => {
            return {
                ...state,
                backupBookList : [...action.payload],
                bookList: [...action.payload],
            }
        },

        setSelectedSortText: (state, action) => {
            return {
                ...state,
                selectedSortText: action.payload,
            }
        },

        sortBookList: (state, action) => {
            let paylaod: string = action.payload;
            if (paylaod == KeyMapper.SortingKeys.MOST_RELEVANT) {

            } else if (paylaod == KeyMapper.SortingKeys.NEWEST) {

            } else if (paylaod == KeyMapper.SortingKeys.OLDEST) {

            } else if (paylaod == KeyMapper.SortingKeys.PRICE_HIGH_TO_LOW) {
                return {
                    ...state,
                    bookList: [...state.bookList].sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1))),
                }
            } else if (paylaod == KeyMapper.SortingKeys.PRICE_LOW_TO_HIGH) {
                return {
                    ...state,
                    bookList: [...state.bookList].sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1))),
                }
            }else{
                return {
                    ...state, 
                    bookList: [...state.backupBookList],
                }
            }
        },

        toggleBookListLoading: (state) => {
            return {
                ...state,
                isBooksLoading:!state.isBooksLoading,
            }
        }
    },
})

export const { setBookList, setSelectedSortText, sortBookList, toggleBookListLoading } = BookListPageSlice.actions;
export default BookListPageSlice.reducer;