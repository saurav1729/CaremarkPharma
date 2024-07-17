import React from 'react';
import herobg from './../resources/one.png';
import Header from './../components/Header';
import Hero from './../components/Hero';
import SearchBox from './../components/SearchBox';
import ProductContainer from '../components/ProductContainer';
import Carousel from '../components/Carousel';
import {cardData} from '../utils/db'

const Home = () => {
  return (
    <>
      
      <div className="relative h-screen w-screen ">
        <img className="absolute top-0 right-0 h-full blur-[1px] w-screen object-cover " src={herobg} alt="Background" />
        {/* <div className="fixed top-0 right-0 h-screen blur-[1px] w-screen object-cover bg-[]" /> */}
        <SearchBox />
        <div className='absolute bottom-[-28%] left-[10rem] z-10' ><Carousel/></div>
        {/* <div className="h-full w-auto float-right flex justify-center mr-6 items-center z-20 relative">
        </div> */}
      </div>

      
      <ProductContainer cardData={cardData} page='home'/>
   
    </>
  );
};

export default Home;