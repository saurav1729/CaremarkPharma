import React, { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { BiRupee } from 'react-icons/bi';

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name} to cart`);
    // Implement your add to cart logic here
  };

  return (

    <div className="flex flex-col gap-4">
          {console.log(product)}
      <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
      <p className="text-xl text-gray-500">{product.manufacturer||'Caremark Pharmaceutical Pvt. Ltd.'}</p>
      <p className="text-lg">{product.composition}</p>
      <div className="flex items-center">
        <p className="text-xl flex justify-center items-center font-semibold text-gray-900">
        <BiRupee/> {product.price.currency} {product.price.discounted.toFixed(2)}
        </p>
        {product.price.discount_percentage > 0 && (
          <p className="ml-2 flex justify-center items-center text-sm font-medium text-gray-500 line-through">
           <BiRupee/>  {product.price.currency} {product.price.original.toFixed(2)}
          </p>
        )}
      </div>
      <p className="text-green-600">{product.availability}</p>
      {/* <div className="flex items-center gap-4">
        <label htmlFor="quantity" className="text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max={product.stock_quantity}
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <ShoppingCartIcon className="h-5 w-5 mr-2" />
          Add to Cart
        </button>
      </div> */}
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-900">Product Details</h3>
        <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
          <div className="py-3 flex justify-between text-sm">
            <dt className="text-gray-500">Package Size</dt>
            <dd className="text-gray-900 font-medium">{product?.category=='tablet'? product.package_size:product.package_size_ml}</dd>
          </div>
          {Object.entries(product.details).map(([key, value]) => (
            <div key={key} className="py-3 flex justify-between text-sm">
              <dt className="text-gray-500">{key}</dt>
              <dd className="text-gray-900 font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default ProductInfo;

