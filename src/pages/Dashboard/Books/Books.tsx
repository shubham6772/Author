import "./Books.scss";
import { BookCard } from "../../../components";
import data from "../../../data/mock-data.json";
import useNavigationHook from "../../../redux/hooks/navigationHook";
const Books = () => {

    const {goTo} = useNavigationHook();

    const handleClick = (id : string, event : any) => {
        goTo(id);
    }

    return (
        <div className="books-main-container">
            {/* <div className="books-latest-container"></div> */}
                    {/* <BookCard {...data[0]} key={data[0].id} />
                    <BookCard {...data[0]} key={data[0].id} />
                    <BookCard {...data[0]} key={data[0].id} />
                    <BookCard {...data[0]} key={data[0].id} />
                    <BookCard {...data[0]} key={data[0].id} />
                    <BookCard {...data[0]} key={data[0].id} />
                    <BookCard {...data[0]} key={data[0].id} /> */}
            {(data.length >= 1)&& data.map((book, index) => {
                return (
                    <BookCard {...book} key={book.id} handleClick={handleClick} />
                )
            })}
        </div>
    )
}

export default Books
