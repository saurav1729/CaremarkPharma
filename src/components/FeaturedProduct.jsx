import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => (
  <motion.div
    className="bg-white rounded-lg shadow-md overflow-hidden"
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="relative">
      <img 
        src={product.primaryData?.imageUrls?.[0]?.url || "/placeholder.svg?height=200&width=300"} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-0 right-0 bg-teal-500 text-white px-2 py-1 m-2 rounded-md text-sm font-semibold">
        {product.availability}
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.manufacturer}</p>
      <p className="text-sm text-gray-500 mb-4">{product.composition}</p>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-lg font-bold text-teal-600">₹{product.price.discounted}</span>
          {product.price.discount_percentage > 0 && (
            <span className="text-sm text-gray-500 line-through ml-2">₹{product.price.original}</span>
          )}
        </div>
        <button className="bg-teal-500 text-white px-3 py-1 rounded-md hover:bg-teal-600 transition-colors duration-300 flex items-center">
          <FaShoppingCart className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  </motion.div>
);

const FeaturedProducts = ({ products }) => {
  // Select first 4 products for featured section
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

