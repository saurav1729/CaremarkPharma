import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import ProductCard from "./Card"
import bottom from '../assets/bottom.svg';

const ProductContainer = ({ cardData, page }) => {
  return (
    <div className="relative h-auto pb-16 w-full overflow-x-hidden " style={{paddingTop: page === "product" ? "10rem" : ""}}>
      <div className='flex justify-center items-center mb-12'>
        <div className="text-teal-300 text-4xl md:text-5xl font-semibold flex flex-col items-center">
          <span>Our Medicine</span>
          <img className="mx-auto w-32 md:w-40" src={bottom} alt="Decorative bottom" />
        </div>
      </div>

      <div className={`w-11/12 mx-auto grid gap-8 ${
        page === "product" 
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
          : "w-[80%] ml-auto mr-auto sm:grid-cols-2 lg:grid-cols-3"
      }`}>
        {cardData.map((event) => (
          <ProductCard key={event._id} data={event} page={page} />
        ))}
      </div>

      {page !== "product" && (
        <Link to="/medicines">
          <div className='w-full mt-12 flex justify-center items-center'>
            <div className='text-2xl text-teal-300 font-semibold cursor-pointer flex items-center gap-3 hover:underline'>
              See all <FaLongArrowAltRight />
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProductContainer;

