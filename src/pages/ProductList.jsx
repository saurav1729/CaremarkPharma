import React from 'react'
import ProductContainer from '../components/ProductContainer'
import ProductData from '../utils/productData.json'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { api } from '../service'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Product = () => {
  const [frontendProducts, setFrontendProducts] = useState(ProductData.products);
  const [backendProducts, setBackendProducts] = useState(null);
  const location = useLocation();
  // const API_URL = "http://localhost:5000/api/product"

    


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
  useEffect(()=>{
    window.scrollTo(0,0)

},[])
  return (
    <div>
      <Helmet>
        <title>Our Medicines - Caremark Pharmaceutical</title>
        <meta 
          name="description" 
          content="Explore our comprehensive range of pharmaceutical products. Quality medicines manufactured by Caremark Pharmaceutical." 
        />
        <link rel="canonical" href={`https://www.caremarkpharmaceutical.com${location.pathname}`} />
      </Helmet>
      
      <ProductContainer cardData={displayProducts} page={'product'} />
      
      </div>
  )
}

export default Product