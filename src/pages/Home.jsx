import React from 'react';
import herobg from './../resources/one.png';
import Header from './../components/Header';
import Hero from './../components/Hero';
import SearchBox from './../components/SearchBox';
import ProductContainer from '../components/ProductContainer';
import Carousel from '../components/Carousel';
import {cardData} from '../utils/db'
import { ContainerScroll } from '../layouts/ContainerScroll';
import ContactUs from '../components/ContactUs';

const Home = () => {
  const FilteredProducts = cardData.filter((data)=>data.id<=6)
  return (
    <>
      
      <div >
        {/* <img className="absolute top-0 right-0 h-full blur-[1px] w-screen object-cover " src={herobg} alt="Background" /> */}
        {/* <div className="fixed top-0 right-0 h-screen blur-[1px] w-screen object-cover bg-[]" /> */}
        {/* <SearchBox /> */}

        {/* <div className="h-full w-auto float-right flex justify-center mr-6 items-center z-20 relative">
        </div> */}
        <Hero/>
        <div className='bg-gradient-to-t from-[#cfd9df] to-[#e2ebf0]'>
        
        
        <ProductContainer cardData={FilteredProducts} page='home'/>
        <ContactUs/>
        <div className='max-w-screen overflow-hidden mt-[-12rem] mb-[-7rem]'>
        <ContainerScroll/>
        </div>
   
        </div>
      
      </div>

      
   
   
    </>
  );
};

export default Home;