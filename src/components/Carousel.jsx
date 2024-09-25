import React, { useState, useEffect } from "react";
import "./styles/caraousel.css";
import images from "../utils/image"; // Ensure this imports correctly

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="carousel_wrapper">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel_card ${index === current ? "carousel_card_active" : ""}`}
        >
          <img className="card_image" src={image.image} alt={image.title} />

        </div>
      ))}

      <div className="carousel_pagination">
        {images.map((_, index) => (
          <div
            key={index}
            className={`pagination_dot ${index === current ? "pagination_dot_active" : ""}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
