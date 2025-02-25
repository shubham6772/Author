import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import "./BookDetails.scss";
import data from "../../../data/mock-details-data.json";
import { getBookDetails, getTimeAgoStringByTimestamp } from "../../../Helper/Helper";
import { Button, Rating, SelectChangeEvent } from "@mui/material";
import { HorizontalScrollList, SelectBox } from "../../../components";
import { cartSelectData } from "../../../data/data";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hook";
import { setCartQuantity } from "../../../redux/slices/BookDetailPageSlice/BookDetailPageSlice";


const BookDetails = () => {
   let { bookId } = useParams();
   const imgRef = useRef<HTMLImageElement | null>(null);
   const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0, visible: false });

   const { cartQuantity } = useAppSelector((state) => state.BookDetailsPageSlice)
   const dispatch = useAppDispatch();

   // Find book by ID
   const book = data.find((item) => item.id === bookId);

   if (!book) {
      return <div className="bookdetails-main-container">Book not found</div>;
   }

   const { coverImage, bookTitle, author, publisher, price, rating, actualPrice, edition, shippingTime, shortSummary, isbn, page, language, weight, longSummary } = book;
   const bookDetails = getBookDetails(isbn, page, language, publisher, weight);

   const handleMouseMove = (e: any) => {
      if (!imgRef.current) return;
      const { left, top, width, height } = imgRef.current.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      setZoomPosition({ x, y, visible: true });
   };

   const handleMouseLeave = () => {
      setZoomPosition((prev) => ({ ...prev, visible: false }));
   };

   const handleQuantityChange = (e: SelectChangeEvent) => {
      dispatch(setCartQuantity(e.target.value));
   }

   return (
      <div className="bookdetails-container">
         <div className="bookdetails-main-container">
            <div className="bookdetails-image-container" style={{ position: "relative" }}>
               {/* Original Image */}
               <img
                  ref={imgRef}
                  src={coverImage}
                  alt={bookTitle}
                  className="book-image"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
               />

               {/* Zoomed Image Box */}
               {zoomPosition.visible && (
                  <div className="zoom-box">
                     <img
                        src={coverImage}
                        alt="Zoomed"
                        className="zoomed-image"
                        style={{
                           transform: `translate(-${zoomPosition.x}%, -${zoomPosition.y}%)`,
                        }}
                     />
                  </div>
               )}
            </div>

            <div className="bookdetails-about-container">
               <div className="bookdetails-title-container">
                  <h2>{bookTitle}</h2>
               </div>
               <div className="bookdetails-author-detail-container">
                  <div className="bookdetails-author-name-container">By: <span>{author}</span></div>
                  <div className="bookdetails-vertical-seperator">|</div>
                  <div className="bookdetails-publisher-name-container">Publisher: <span>{publisher}</span></div>
               </div>
               <div className="bookdetails-rating-container">
                  <div className="bookdetails-rating">Rating: <span>{rating?.averageRating || "N/A"}</span></div>
                  <div className="bookdetails-vertical-seperator">|</div>
                  <div className="bookdetails-reviews"><span>{rating?.totalRatings || "0"}</span> Reviews</div>
               </div>
               <div className="bookdetails-price-container">
                  <div className="bookdetails-price">${price}</div>
                  <div className="bookdetails-price-off-container">
                     <div className="bookdetails-actual-price">Price: ${actualPrice}</div>
                     <div className="bookdetails-save-amount">Save: <span>{(parseFloat(actualPrice) - parseFloat(price)).toFixed(2)}</span> {`(${parseInt(price) / parseInt(actualPrice) * 100}%)`}</div>
                  </div>
               </div>
               <div className="bookdetails-edition-container">
                  <div className="bookdetails-edition">{edition}</div>
                  <div className="bookdetails-shipping-details">ships within <span>{shippingTime}-{shippingTime + 2}</span> business days</div>
               </div>

               <div className="bookdetails-short-summary-container">
                  <hr />
                  <div className="bookdetails-short-summary">
                     {shortSummary}
                     {/* <a href="#bookdetails-long-summary">read more...</a> */}
                  </div>
                  <hr />
               </div>

               <div className="bookdetails-additional-info-container">
                  <div className="bookdetails-info-box-container">
                     {bookDetails.map((detail, index) => (
                        <div key={index} className="bookdetails-additional-info">
                           <div className="bookdetails-additional-info-title">{detail.title}</div>
                           <detail.Icon />
                           <div className="bookdetails-additional-info-value">{detail.value}</div>
                        </div>
                     ))}
                  </div>
                  <hr />
               </div>

            </div>
            <div className="bookdetails-buyActionContainer">
               <SelectBox title="Quantity" selectedText={cartQuantity} options={cartSelectData} onChange={(e: any) => handleQuantityChange(e)} />
               <Button className="bookdetails-button green" variant="contained">Add to Cart</Button>
               <Button className="bookdetails-button green" variant="contained">Buy Now</Button>
               <Button className="bookdetails-button" variant="outlined">Add to Wishlist</Button>
            </div>
         </div>

         <div className="bookdetails-related-book-list">
            <h3>Best Sellers</h3>
            <HorizontalScrollList />
         </div>

         <div className="bookdetails-long-summary-container">
            <h3>About the Book:</h3>

            <div id="bookdetails-long-summary" className="bookdetails-long-summary">{longSummary}</div>
         </div>

         <div className="bookdetails-specifications-container">
            <h3>Product Details</h3>
            <div className="bookdetails-product-specifcation-box">
               <div className="bookdetails-product-left-specification">
                  <div className="bookdetails-specification-key-value-container">
                     <div className="bookdetails-product-specification-title">Page: </div>
                     <div className="bookdetails-product-specification-value">{page}</div>
                  </div>
                  <div className="bookdetails-specification-key-value-container">
                     <div className="bookdetails-product-specification-title">Language: </div>
                     <div className="bookdetails-product-specification-value">{language}</div>
                  </div>
                  <div className="bookdetails-specification-key-value-container">
                     <div className="bookdetails-product-specification-title">Weight: </div>
                     <div className="bookdetails-product-specification-value">{weight} kg</div>
                  </div>
                  <div className="bookdetails-specification-key-value-container">
                     <div className="bookdetails-product-specification-title">Publisher: </div>
                     <div className="bookdetails-product-specification-value">{publisher}</div>
                  </div>
                  <div className="bookdetails-specification-key-value-container">
                     <div className="bookdetails-product-specification-title">Publication Date: </div>
                     <div className="bookdetails-product-specification-value">{edition}</div>
                  </div>
                  <div className="bookdetails-specification-key-value-container">
                     <div className="bookdetails-product-specification-title">ISBN: </div>
                     <div className="bookdetails-product-specification-value">{isbn}</div>
                  </div>
               </div>
               <div className="bookdetails-product-right-specification">
                  <div className="bookdetails-specification-key-value-container">
                     <div className="bookdetails-product-specification-title">Language: </div>
                     <div className="bookdetails-product-specification-value">{language}</div>
                  </div>
                  <div className="bookdetails-specification-key-value-container">
                     <div className="bookdetails-product-specification-title">Pages: </div>
                     <div className="bookdetails-product-specification-value">{page}</div>
                  </div>
               </div>
            </div>
            .
         </div>

         <div className="bookdetails-related-book-list">
            <h3>Similer Products</h3>
            <HorizontalScrollList />
         </div>

         <div className="bookdetails-customer-reviews-container">
            <div className="bookdetails-customer-reviews-header-container">
               <h3>Customer Reviews</h3>
               <Button className="bookdetails-write-review-button" variant="outlined">Write a Review</Button>
            </div>
            <div className="bookdetails-total-review-container">Total Reviews: <span>{rating.totalRatings}</span></div>
            <div className="bookdetails-total-review-container">Average Rating: <span>{rating.averageRating}</span></div>
            <Rating size="small" className="bookdetails-user-rating" name="half-rating-read" defaultValue={rating.averageRating} precision={0.5} readOnly />
            <div className="bookdetail-see-more-reviews-button">see all</div>
            <hr className="bookdetails-horizontal-seperator" />

            <div className="bookdetails-top-reviews-container">
               {rating.topThreeRatings.map((item: any, index: number) => {
                  return (
                     <>
                        <div key={index} className="bookdetails-user-review-container">
                           <div className="bookdetails-user-detail-container">
                              <div className="bookdetails-user-name-container">{item.user}</div>
                              <div className="bookdetails-user-rating-container">
                                 <div className="bookdetails-user-total-reviews">Reviews: <span>{item.totalReview}</span></div>
                                 <div className="bookdetails-user-type">Reader Type: <span>{item.readerType}</span></div>
                              </div>
                           </div>

                           <div className="bookdetails-user-comment-container">
                              <div className="bookdetails-user-comment-time-with-rating">
                                 <Rating size="small" className="bookdetails-user-rating" name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
                                 <div className="bookdetails-user-date">{getTimeAgoStringByTimestamp(item.date)}</div>
                              </div>
                              <div className="bookdetails-user-comment">{item.comment}</div>
                           </div>
                        </div>
                        <hr />
                     </>
                  );
               })}

            </div>

         </div>
      </div>
   );
};

export default BookDetails;
