import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductData from '../utils/productData.json';
import ImageGallery from '../components/Product/ImageGallery';
import ProductInfo from '../components/Product/ProductInfo';
import ProductDetails from '../components/Product/productDetails';
import RelatedProducts from '../components/Product/RelatedProducts';
import Breadcrumb from '../components/Product/BreadCrumb';
import { api } from '../service';
import { Helmet } from 'react-helmet-async';

const Product = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Updated product:", product);
  }, [product]);

  useEffect(() => {
    const fetchProduct = async () => {
      console.log("fetch effect called");
      setLoading(true);

      try {
        const response = await api.get(`/api/product/getProduct/${productId}`);
        console.log("response", response);
        
        if (response.data && response.data.success && response.data.data) {
          // API call successful - use database data
          setProduct(response.data.data);
          setError(null);
        } else {
          // API returned but no valid data - use mock data as fallback
          const fallbackProduct = ProductData.products.find(
            (p) => p._id === productId
          );
          
          if (fallbackProduct) {
            setProduct(fallbackProduct);
            setError(null);
          } else {
            setError('Product not found');
            setProduct(null);
          }
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        
        // API call failed - use mock data as fallback
        const fallbackProduct = ProductData.products.find(
          (p) => p._id === productId
        );
        
        if (fallbackProduct) {
          setProduct(fallbackProduct);
          setError(null);
        } else {
          setError('Error loading product');
          setProduct(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
    window.scrollTo(0, 0);
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading product...</p>
        </div>
      </div>
    );
  }

  if (error && !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 text-lg">Product not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-12 bg-gradient-to-t from-gray-100 to-white">
      <Helmet>
        <title>{product.name} - Caremark Pharmaceutical</title>
        <meta
          name="description"
          content={
            product.description?.short ||
            `Learn more about ${product.name} from Caremark Pharmaceutical.`
          }
        />
        <meta
          property="og:title"
          content={`${product.name} - Caremark Pharmaceutical`}
        />
        <meta
          property="og:description"
          content={
            product.description?.short ||
            `Learn more about ${product.name} from Caremark Pharmaceutical.`
          }
        />
        <meta
          property="og:image"
          content={
            product.images?.[0]?.url ||
            'https://www.caremarkpharmaceutical.com/default-product-image.jpg'
          }
        />
        <meta
          property="og:url"
          content={`https://www.caremarkpharmaceutical.com/medicines/${productId}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href={`https://www.caremarkpharmaceutical.com/medicines/${productId}`}
        />
      </Helmet>

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

        {/* Uncomment when you have reviews */}
        {/* <Reviews reviews={product.reviews} /> */}

        <RelatedProducts relatedIds={product.related_products} />
      </div>
    </div>
  );
};

export default Product;