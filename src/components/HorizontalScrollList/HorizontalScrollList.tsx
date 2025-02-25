import { useRef } from "react";
import "./HorizontalScrollList.scss";
import horizontalData from "../../data/mock-horizontal-list-data.json"
import BookCard from "../BookCard/BookCard";

// const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

const HorizontalScrollList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll Left & Right
  const scroll = (direction : any) => {
    if (scrollRef.current) {
      scrollRef.current?.scrollBy({
        left: direction === "left" ? -window.innerWidth : window.innerWidth,
        // left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  const handleClick = () => {

  }

  return (
    <div className="carousel-wrapper">
      <button className="scroll-btn left" onClick={() => scroll("left")}>⬅️</button>
      
      <div ref={scrollRef} className="carousel-container">
        {horizontalData.map((item, index) => (
          <div key={index} className="carousel-item">
            <BookCard {...item} handleClick={handleClick} />
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={() => scroll("right")}>➡️</button>
    </div>
  );
};

export default HorizontalScrollList;
