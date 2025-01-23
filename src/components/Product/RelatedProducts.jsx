import React from 'react';
import { Link } from 'react-router-dom';
import productData from '../../utils/productData.json';

const RelatedProducts = ({ relatedIds }) => {
  const relatedProductIds = relatedIds && relatedIds.map(item => item.value);
  const relatedProducts = productData.products.filter((product) => relatedProductIds && relatedProductIds.includes(product._id));
  console.log(relatedIds, relatedProducts)

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
      {relatedProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {relatedProducts.map((product) => (
            <Link
              key={product.id}
              to={`/medicines/${product._id}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out transform group-hover:scale-105">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={product.images && product.images.length > 0 ? product?.images[0]?.url : '/default-image.jpg'}
                    alt={product.name}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-sm font-medium text-white truncate">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-300 truncate">
                    {product.manufacturer}
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    ₹{product.price.discounted.toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-gray-500">No related products found.</p>
      )}
    </div>
  );
};

export default RelatedProducts;

