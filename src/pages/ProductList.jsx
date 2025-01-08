import React from 'react'
import ProductContainer from '../components/ProductContainer'
import ProductData from '../utils/productData.json'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { api } from '../service'

const Product = () => {
  const [frontendProducts, setFrontendProducts] = useState(ProductData.products);
  const [backendProducts, setBackendProducts] = useState(null);
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
    <div><ProductContainer cardData={displayProducts} page={'product'} /></div>
  )
}

export default Product