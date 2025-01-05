import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../utils/productData.json';
import ImageGallery from '../components/Product/ImageGallery'
import ProductInfo from '../components/Product/ProductInfo';
import ProductDetails from '../components/Product/productDetails';
import Reviews from '../components/Product/Reviews';
import RelatedProducts from '../components/Product/RelatedProducts';
import Breadcrumb from '../components/Product/BreadCrumb';

const Product = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = productData.products.find((p) => p.id === productId);
    setProduct(foundProduct);
  }, [productId]);

  if (!product) return <div>Loading...</div>;

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
        <Reviews reviews={product.reviews} />
        <RelatedProducts relatedIds={product.related_products} />
      </div>
    </div>
  );
};

export default Product;

