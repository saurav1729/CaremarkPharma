import React from 'react';
import herobg from './../resources/one.png';
import Header from './../components/Header';
import Hero from './../components/Hero';
import SearchBox from './../components/SearchBox';
import ProductContainer from '../components/ProductContainer';

const Home = () => {
  return (
    <>
      
      <div className="relative h-[600px] w-screen">
        <Header />
        <img className="absolute top-0 right-0 h-[600px] w-screen object-cover" src={herobg} alt="Background" />
        <SearchBox />
        <div className="h-full w-auto float-right flex justify-center mr-6 mt-6 items-center z-20 relative">
        </div>
      </div>

      <Hero />
      <ProductContainer/>
   
    </>
  );
};

export default Home;