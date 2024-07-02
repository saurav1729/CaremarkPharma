import React, { useState, useEffect } from "react";
import "./styles/caraousel.css";
import images from "../utils/image";

function Carousel(props) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
   console.log(props);

   console.log(images)
  useEffect(() => {
    let timeOut;
    if (autoPlay) {
      timeOut = setTimeout(() => {
        slideRight();
      }, 2500);
    }
    return () => clearTimeout(timeOut);
  }, [current, autoPlay]);

  const slideRight = () => {
    setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
  };

  return (
    <div className='carousel_outer'>
      <div
        className="carousel"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <div className="carousel_wrapper">
          {images.map((images, index) => (
            <div
              key={index}
              className={
                index === current
                  ? "carousel_card carousel_card_active"
                  : "carousel_card"
              }
            >
              <img className="card_image" src={images.image} alt={images.title} />
              <div className="card_overlay">
                <h2 className="card_title">{images.title}</h2>
              </div>
            </div>
          ))}

          <div className="carousel_pagination">
            {images.map((_, index) => (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot_active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
