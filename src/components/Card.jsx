import React, { useState } from 'react';
import './styles/card.css';
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductCard = (props) => {
  const { data, customStyle, page } = props;
  const [showTitle, setShowTitle] = useState(false);

  return (
    <div className='flex flex-col justify-center items-center'>
      <div
        onMouseEnter={() => setShowTitle(true)}
        onMouseLeave={() => setShowTitle(false)}
        style={customStyle}
        className={`relative p-1 border border-[lightgray] rounded-[10px]  ${page === 'home' ? 'card' : ''}`}
      >
        <img className='img rounded-[10px]' src={data.imageURL} alt="" />
        {showTitle && (
          <div className='absolute  inset-1 border  rounded-[10px] z-50 bg-[#363636] bg-opacity-90 flex flex-col justify-center items-center'>
            
            <h1 className='text-3xl text-white'>{data.medicineName}</h1>
            <span className='text-xl text-blue-500 font-sans font-semibold'>{data.manufacturer}</span>
            <p className='text-md text-green-500 font-sans font-semibold'> <span className='text-blue-500 '>Price:{' '}</span>{data?.price?.original}</p>
            <Link to={'/medicines/'+data.id}><button className='px-6 py-2 bg-green-800 cursor-pointer outline-none shadow-sm shadow-blue-500 text-md font-medium text-white rounded-lg mt-2 border border-[#ffffff61]'>See more..</button></Link>

                                  </div>
        )}
      </div>
      <span className='text-center cursor-pointer text-[1.6rem] font-semibold leading-7 bg-gradient-to-r from-green-400 to-orange-400 bg-clip-text text-transparent'>{data.medicineName}</span>
    </div>
  );
};

export default ProductCard;
