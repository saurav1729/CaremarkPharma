import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../resources/logo.png';
import { FaIndianRupeeSign } from "react-icons/fa6";

const ProductCard = ({ data, page }) => {
  const [hovered, setHover] = useState(false);

  return (
    <div 
      className="max-w-xs w-full group/card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="overflow-hidden relative card h-96  bg-[linear-gradient(90deg,_rgba(2,0,36,1)_37%,_rgba(5,5,15,1)_75%)]  rounded-lg border border-teal-300 shadow-teal-200 shadow-[5px_5px_0px_0px] max-w-sm mx-auto flex flex-col justify-between p-4 transition-all duration-300 ease-in-out transform  hover:shadow-[8px_8px_0px_0px]"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover/card:scale-110"
          style={{ backgroundImage: `url(${data.imageURL})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black  to-transparent opacity-70 transition-opacity duration-300 group-hover/card:opacity-80" />

        <div className="flex flex-row items-center space-x-4 z-10 ">
          <img
            alt="product"
            src={Logo}
            className="h-10 w-10 p-2 rounded-full border-2 border-teal-300 bg-white object-cover"
          />
          <div className="flex flex-col ">
            <p className="font-semibold text-sm text-teal-300">
              {data.manufacturer}
            </p>
            <p className="text-xs text-gray-300">Harine</p>
          </div>
        </div>

        <div className="text-content z-10 transition-all duration-300 ease-in-out bg-transparent bg-opacity-50 backdrop-blur-sm p-4 -mx-4 -mb-4 rounded-b-lg">
          <h1 className="font-bold text-xl text-teal-300 mb-2">
            {data.medicineName}
          </h1>
          {hovered && (
            <p className="font-normal text-sm text-gray-200 mb-3 line-clamp-3">
              {data.description}
            </p>
          )}
          <div className="flex justify-between items-center">
            <span className="text-md font-semibold text-white flex gap-2">
              Price: <span className="text-teal-300 flex items-center justify-center"><FaIndianRupeeSign/>{data.price.original}</span>
            </span>
            <Link to={'/medicines/' + data.id}>
              <button className="px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors duration-300">
                See details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
