import React, { useState, useEffect } from "react";
// import { images } from "../utils/image";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Carousel from "./Carousel";
import CarouselImg from "../utils/image";
import "./styles/caraousel.css"

const Hero = () => {
  // const [currentIndex, setIndex] = useState(0);

  // const handleNext = () => {
  //   setIndex((currentIndex + 1) % images.length);
  // };

  // const handleBack = () => {
  //   setIndex((currentIndex - 1 + images.length) % images.length);
  // };

  // const handleDotClick = (index) => {
  //   setIndex(index);
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="absolute w-[60rem] top-[73%] left-[12%]  h-auto overflow-hidden rounded-lg">
      {/* <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="h-[22rem] w-full object-cover"
          />
        ))}
      </div> */}

      {/* <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
        <div
          className="text-[4rem] text-[#558CF650] cursor-pointer hover:text-[#fff]"
          onClick={handleBack}
        >
          <IoIosArrowDropleft />
        </div>
        <div
          className="text-[4rem] text-[#558CF650] cursor-pointer hover:text-[#fff]"
          onClick={handleNext}
        >
          <IoIosArrowDropright />
        </div>
      </div> */}
      {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-[#558CF6]" : "bg-[#E1E0E0]"
            }`}
          />
        ))}
      </div> */}

{/* <div className="cdiv"><Carousel images={CarouselImg} /></div> */}
    
    </div>
  );
};

export default Hero;
