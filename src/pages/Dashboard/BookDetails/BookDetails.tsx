// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { KeyMapper } from "../../../KeyMapper";
import { HTTPRequest } from "../../../HttpRequests/HTTPRequest";
import "./BookDetails.scss";
import { useQuery } from "@tanstack/react-query";
import { API } from "../../../Helper/apiUrl";
// import data from "../../../data/mock-data.json"

const BookDetails = () => {

   let {bookId} =  useParams();
   console.log(bookId);
//    const { data, isLoading, isError, isSuccess } = useQuery({
//     queryKey: [KeyMapper.ReactQueryKeys.BOOK_DETAIL],
//     queryFn: () => HTTPRequest.get(API.bookDataUrl),
//     retry: 3,
//     retryDelay: (attempt) => Math.min(5000 * attempt, 15000),
//     refetchOnWindowFocus: false, //prevent refetching when switching tabs by default is true
//     refetchOnReconnect: true, // Refetches only when network is reconnected
// })
   

  return (
    <div className="bookdetails-main-container">
      Book Details
    </div>
  )
}

export default BookDetails
