import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../resources/logo.png';
import { FaIndianRupeeSign } from "react-icons/fa6";
import AuthContext from '../../Context/AuthContext';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

const ProductCard = (props) => {
  const{ data, onEdit,onDelete,enableEdit } = props; 
  console.log(props.data);
  const [hovered, setHover] = useState(false);
  const authCtx = useContext(AuthContext);
  console.log("data in admin ". data); 
  const firstImageUrl = data?.images?.[0].url;
console.log("image", firstImageUrl);

  return (
    <div 
      className="max-w-xs w-full group/card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="overflow-hidden relative card h-96 bg-[linear-gradient(90deg,_rgba(2,0,36,1)_37%,_rgba(5,5,15,1)_75%)] rounded-lg border border-teal-300  shadow-[0px_4px_12px_rgba(128,0,255,0.2),_0px_2px_4px_rgba(128,0,255,0.3)] max-w-sm mx-auto flex flex-col justify-between p-4 transition-all duration-300 ease-in-out transform hover:shadow-[0px_6px_16px_rgba(0,255,255,0.3),_0px_3px_6px_rgba(0,255,255,0.5)]"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out group-hover/card:scale-110"
          style={{ backgroundImage: `url(${firstImageUrl||data?.images?.first})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 transition-opacity duration-300 group-hover/card:opacity-80" />

        <div className="flex flex-row items-center space-x-4 z-10 ">
          <img
            alt="product"
            src={Logo}
            className="h-10 w-10 p-2 rounded-full border-2 border-teal-300 bg-white object-cover"
          />
          <div className="flex flex-col ">
            <p className="font-semibold text-sm text-teal-300">
              {data?.manufacturer}
            </p>
          </div>
        </div>

        <div className="text-content z-10 transition-all duration-300 ease-in-out bg-transparent bg-opacity-50 backdrop-blur-sm p-4 -mx-4 -mb-4 rounded-b-lg">
          <h1 className="font-bold text-xl text-teal-300 mb-2">
            {data?.name}
          </h1>
          {hovered && (
            <p className="font-normal text-sm text-gray-200 mb-3 line-clamp-3">
              {data?.description?.short}
            </p>
          )}
          <div className="flex justify-between items-center">
            <span className="text-md font-semibold text-white flex gap-2">
              Price: <span className="text-teal-300 flex items-center justify-center"><FaIndianRupeeSign/>{data.price.original}</span>
            </span>
            <Link to={'/medicines/' + data._id}>
              <button className="px-4 py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition-colors duration-300">
                See details
              </button>
            </Link>
          </div>
          {console.log(enableEdit)}
          {}
        </div>
      </div>
      {enableEdit && hovered && authCtx.user.role === "ADMIN" && (
        <motion.div 
          className="w-full flex justify-between mt-3 gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={(e) => {
              e.preventDefault()
              if (onEdit) {
                authCtx.eventData = data
                onEdit(data)
              }
            }}
            className="flex-1 py-2 px-4 bg-[#26b5c6] text-white font-medium rounded-lg hover:bg-[#1d95a3] transition-colors duration-300"
          >
            Edit Product
          </button>
          <button
            onClick={(e) => {
              e.preventDefault()
              const isConfirmed = window.confirm(`Do you really want to delete this product?`)
              if (isConfirmed && onDelete) {
                authCtx.eventData = data
                onDelete()
              }
            }}
            className="flex-1 py-2 px-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors duration-300"
          >
            Delete Product
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProductCard;

