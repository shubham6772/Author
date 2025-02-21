import { memo, useState } from "react";
import "./BookCard.scss";
import BlurContainer from "../BlurContainer/BlurContainer";
import CircleRating from "../CircularRating.tsx/CircularRating";

interface bookProps {
  title: string,
  image: string,
  author: string,
  rating: number,
  price: string
  id: string,
  genre: string
  handleClick: Function,
}
const BookCard = memo(({ id, title, image, author, rating, price, genre, handleClick }: bookProps) => {

  const [showBlurContainer, setShowBlurContainer] = useState(false);
  const [showNoPreview, setShowNoPreview] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const handleOnLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    if (event.currentTarget.naturalWidth < event.currentTarget.naturalHeight) {
      setShowBlurContainer(true);
  }

  }

  const handleOnError = () => {
    setShowNoPreview(true);
    setShowImage(true);
  }

  return (
    <div className={`bookcard-container`} onClick={() => handleClick(id)}>
      <div className="bookcard-image-container">
        <img className={`bookcard-bannerImage ${(showBlurContainer && "bookcard-object-fit")} ${(showImage && "bookcard-display")}`} src={image} alt="Icon" onLoad={(e) => handleOnLoad(e)} onError={() => handleOnError()} />
        {showBlurContainer && <BlurContainer image={image} id="bookcard-blur-image-filter" />}
        {showNoPreview && (<div className="bookcard-no-preview">No image available</div>)}
      </div>
      <div className="bookcard-detail-container">
        <div className="bookcard-title-container">
          <div className="bookcard-title" >{(title.length > 20) ? title.slice(0, 20) + "..." : title}</div>
          <span className="bookcard-title-tooltip">{title}</span>
        </div>
        <p className="bookcard-author-name">{author}</p>

        <div className="bookcard-genre">{genre.split("|").map(genre => genre + " ")}</div>

        <div className="bookcard-bottom-container">
          <div className="bookcard-rating">
            <CircleRating rating={rating} />
          </div>
          <h4 className="bookcard-price">{price}</h4>
        </div>

      </div>
    </div>
  )
})

export default BookCard
