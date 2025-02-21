import { useRef } from "react";
import "./HorizontalScrollList.scss";

const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

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

  return (
    <div className="carousel-wrapper">
      <button className="scroll-btn left" onClick={() => scroll("left")}>⬅️</button>
      
      <div ref={scrollRef} className="carousel-container">
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            {item}
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={() => scroll("right")}>➡️</button>
    </div>
  );
};

export default HorizontalScrollList;
