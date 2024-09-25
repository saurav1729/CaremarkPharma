import React, { useState } from 'react';
import './styles/card.css';
import { Link } from 'react-router-dom';
import {cn} from '../utils/utils'
import Logo from '../resources/logo.png'

const ProductCard = (props) => {
  const { data, customStyle, page } = props;
  const [hovered,setHover]=useState(false);

  return (
     
    (<div className="max-w-xs w-full group/card " onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
<div
  className=" overflow-hidden relative card h-96 rounded-md  border border-blue-300 shadow-blue-200 shadow-[14px_14px_1px_2px]  max-w-sm mx-auto flex flex-col justify-between p-4"
  style={{ backgroundImage: `url(${data.imageURL})`,backgroundSize:'cover' }}
>

        <div
          className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
        <img
  alt="product"
  src={Logo}
  className="h-10 w-10 p-2 rounded-full border-2 object-cover"
/>

          <div className="flex flex-col">
            <p className="font-normal text-base text-pretty text-[#26b5c6] relative z-10">
            {data.manufacturer}
            </p>
            <p className="text-sm text-gray-400">Harine</p>
          </div>
        </div>
        <div
      className={`text-content transition-all duration-300 ease-in-out 
        ${hovered ? '' : 'bg-white/20 backdrop-blur-lg'}`}
      style={{
        background: hovered ? '' : '#2a2a2a90',
        backdropFilter: hovered ? '' : 'blur(10px)',  // Glass effect blur
        width: hovered ? '' : '120%',
        marginLeft: hovered ? '' : '-2rem',
        marginBottom: hovered ? '' : '-2rem',
      }}

    >          <h1 className="font-bold text-xl md:text-2xl text-[#26b5c6] relative z-10" style={{marginLeft:hovered?'':'1.8rem'}}>
            {data.medicineName}
          </h1>
         {hovered && <p className="font-normal text-md text-gray-50 relative z-10 my-1">
             {data.description}
          </p>
}
          <p className="font-normal text-lg text-gray-50 relative z-10  flex justify-between items-center" style={{marginLeft:hovered?'':'1.8rem',marginBottom:hovered?'':'1rem'}}>
            <div>  <span className='text-[#295276]'>Price: {data?.price?.original}</span></div>
        
          <Link to={'/medicines/' + data.id}>
            <button className='px-6 py-1 cursor-pointer  text-md font-medium text-[#295276] hover:underline rounded-lg mt-2 '>
              See details
            </button>
          </Link> 
          </p>
       
        </div>
        {/* <h1 className='text-3xl text-white'>{data.medicineName}</h1>
          <span className='text-xl text-blue-500 font-sans font-semibold'>{data.manufacturer}</span>
          <p className='text-md text-green-500 font-sans font-semibold'>
            <span className='text-blue-500'>Price: </span>{data?.price?.original}
          </p>
          <Link to={'/medicines/' + data.id}>
            <button className='px-6 py-2 bg-green-800 cursor-pointer outline-none shadow-sm shadow-blue-500 text-md font-medium text-white rounded-lg mt-2 border border-[#ffffff61]'>
              See more..
            </button>
          </Link> */}
      </div>
    </div>)
  );
};

export default ProductCard;
