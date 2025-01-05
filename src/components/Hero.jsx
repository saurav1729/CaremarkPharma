import React from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Carousel from "./Carousel";
import CarouselImg from "../utils/image";
import "./styles/caraousel.css";
import { FaRegThumbsUp } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiSolidOffer } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="hero h-auto rounded-lg pb-[5rem]">
      <div className="mt-[3rem]">
        <Carousel />
      </div>
      <ul className="flex flex-wrap w-[90%] ml-auto mr-auto sm:justify-around gap-9 sm:gap-5 md:gap-0 mt-8 ">
        <FeatureItem icon={<FaRegThumbsUp />} text="Genuine Medicine" />
        <FeatureItem icon={<BiSolidOffer />} text="Attractive Offers" />
        <FeatureItem icon={<CiDeliveryTruck />} text="Timely Delivery" />
        <FeatureItem icon={<MdOutlinePayments />} text="Easy Payments" />
        <FeatureItem icon={<CiDeliveryTruck />} text="Delivery onTime" />
      </ul>
    </div>
  );
};

const FeatureItem = ({ icon, text }) => (
  <li className="flex justify-center items-center gap-2 text-[1rem] font-sans font-semibold text-[#293649]">
    <div className="p-3 rounded-full bg-[#26b5c6]">
      {React.cloneElement(icon, { className: "text-white text-[2rem]" })}
    </div>
    <span className="w-24">{text}</span>
  </li>
);

export default Hero;

