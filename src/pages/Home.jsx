import React, { useState } from 'react';
import herobg from './../resources/one.png';
import Header from './../components/Header';
import Hero from './../components/Hero';
import SearchBox from './../components/SearchBox';
import ProductContainer from '../components/ProductContainer';
import Carousel from '../components/Carousel';
import ProductData from "../utils/productData.json"
import { ContainerScroll } from '../layouts/ContainerScroll';
import ContactUs from '../components/ContactUs';
import { useEffect } from 'react';
import axios from 'axios';
import { api } from '../service';

const Home = () => {
  const [frontendProducts, setFrontendProducts] = useState(ProductData.products);
  const [backendProducts, setBackendProducts] = useState(null);
  const API_URL = "http://localhost:5000/api/product"

    


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await api.get('/api/product/getAllProducts');
        if (response.data && response.data.success) {
          setBackendProducts(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Use backend data if available, otherwise use frontend data
  const displayProducts = backendProducts || frontendProducts;

  


  const filteredProducts = displayProducts?.slice(0, 6) ?? []; // Filter first 6 products
  console.log("filteredProducts", filteredProducts); 
  return (
    <>
      
      <div >
        {/* <img className="absolute top-0 right-0 h-full blur-[1px] w-screen object-cover " src={herobg} alt="Background" /> */}
        {/* <div className="fixed top-0 right-0 h-screen blur-[1px] w-screen object-cover bg-[]" /> */}
        {/* <SearchBox /> */}

        {/* <div className="h-full w-auto float-right flex justify-center mr-6 items-center z-20 relative">
        </div> */}
        <Hero/>
        <div className=''>
        <ProductContainer cardData={filteredProducts} page='home'/>
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