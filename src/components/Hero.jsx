import React, { useState, useEffect } from "react";
// import { images } from "../utils/image";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Carousel from "./Carousel";
import CarouselImg from "../utils/image";
import "./styles/caraousel.css"
import { FaRegThumbsUp } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";

const Hero = () => {


  return (
    <div className=" hero h-auto rounded-lg pt-[10rem]  pb-[5rem]">
    
            <div className='' ><Carousel/></div>

              <ul className="flex justify-evenly mt-8">
                <div className="flex justify-center items-center gap-2 text-[1rem] font-sans font-semibold text-[#293649]">
                  <div className="p-3 rounded-full bg-[#26b5c6]">  <FaRegThumbsUp className="text-white text-[2rem]" /> </div>
                    <li className="w-5">Genuine Medicine</li>
                </div>
                <div className="flex justify-center items-center gap-2 text-[1rem] font-sans font-semibold text-[#293649]">
                  <div className="p-3 rounded-full bg-[#26b5c6]">  <BiSolidOffer className="text-white text-[2rem]" /> </div>
                    <li className="w-5">Attractive Offers</li>
                </div>
                <div className="flex justify-center items-center gap-2 text-[1rem] font-sans font-semibold text-[#293649]">
                  <div className="p-3 rounded-full bg-[#26b5c6]">  <CiDeliveryTruck className="text-white text-[2rem]" /> </div>
                    <li className="w-5">Timely Delivery</li>
                </div>
                <div className="flex justify-center items-center gap-2 text-[1rem] font-sans font-semibold text-[#293649]">
                  <div className="p-3 rounded-full bg-[#26b5c6]">  <MdOutlinePayments className="text-white text-[2rem]" /> </div>
                    <li className="w-5">Easy Payments</li>
                </div>
                <div className="flex justify-center items-center gap-2 text-[1rem] font-sans font-semibold text-[#293649]">
                  <div className="p-3 rounded-full bg-[#26b5c6]">  <MdOutlinePayments className="text-white text-[2rem]" /> </div>
                    <li className="w-5">Delivery onTime</li>
                </div>
              
                {/* <li>Attractive Offers</li>
                <li>Timely Delivery</li>
                <li>Easy Payments</li> */}

              </ul>
            
    </div>
  );
};

export default Hero;
