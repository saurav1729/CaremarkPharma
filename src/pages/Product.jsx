import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductData from '../utils/productData.json';
import ImageGallery from '../components/Product/ImageGallery'
import ProductInfo from '../components/Product/ProductInfo';
import ProductDetails from '../components/Product/productDetails';
import Reviews from '../components/Product/Reviews';
import RelatedProducts from '../components/Product/RelatedProducts';
import Breadcrumb from '../components/Product/BreadCrumb';
import axios from 'axios';
import { api } from '../service';
const API_URL = "http://localhost:5000/api/product"

const Product = () => {
  const [product, setProduct] = useState(null);
  const [error,setError]=useState(null);
  
  
    const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();
  

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const response = await api.get(`/api/product/getProduct/${productId}`);
        if (response.data && response.data.success) {
          setProduct(response.data.data);
        } else {
          // If backend request fails, fall back to frontend data
          const frontendProduct = ProductData.products.find(p => p.id === productId);
          if (frontendProduct) {
            setProduct(frontendProduct);
          } else {
            throw new Error('Product not found');
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setError(error.message);
        // Attempt to fall back to frontend data
        const frontendProduct = ProductData.products.find(p => p.id === productId);
        if (frontendProduct) {
          setProduct(frontendProduct);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [productId]);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error && !product) return <div className="min-h-screen flex items-center justify-center">Error: {error}</div>;
  if (!product) return <div className="min-h-screen flex items-center justify-center">Product not found</div>;

  return (
    <div className="min-h-screen pt-28 pb-12 bg-gradient-to-t from-gray-100 to-white">
      <Breadcrumb product={product} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2">
            <ImageGallery images={product.images} />
          </div>
          <div className="lg:w-1/2">
            <ProductInfo product={product} />
          </div>
        </div>
        <ProductDetails product={product} />
        {/* <Reviews reviews={product.reviews} /> */}
        {/* <RelatedProducts relatedIds={product.related_products} /> */}
      </div>
    </div>
  );
};

export default Product;

