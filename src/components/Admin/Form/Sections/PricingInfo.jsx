import React, { useEffect, useRef } from 'react';
import Input from '../../../core/Input';
import Checkbox from "../../../core/Checkbox";

const PricingInfo = ({ product, handleChange, errors }) => {
  const priceRef = useRef(product.price);

  useEffect(() => {
    const { original, discount_percentage } = priceRef.current;
    if (original && discount_percentage) {
      const discount = (parseFloat(original) * parseFloat(discount_percentage)) / 100;
      const discountedPrice = parseFloat(original) - discount;

      handleChange({
        target: {
          name: 'price',
          value: { ...priceRef.current, discounted: discountedPrice },
        },
      });
    } else if (original) {
      handleChange({
        target: {
          name: 'price',
          value: { ...priceRef.current, discounted: original },
        },
      });
    }
  }, [product.price.original, product.price.discount_percentage]);

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const updatedPrice = { ...product.price, [name]: value };

    priceRef.current = updatedPrice;
    handleChange({ target: { name: 'price', value: updatedPrice } });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Pricing Information</h2>
      <div className='w-full flex flex-wrap'>
        <div className='mb-2 w-full md:w-1/2 md:pr-2'>
          <Input
            label="Original Price"
            id="original"
            name="original"
            type="text"
            placeholder="Enter original price"
            value={product.price.original}
            onChange={handlePriceChange}
            error={errors['price.original']}
            className="bg-gray-50 focus:bg-white transition-colors"
          />
        </div>
        <div className='mb-2 w-full md:w-1/2 md:pl-2'>
          <Input
            label="Discount Percentage"
            id="discount_percentage"
            name="discount_percentage"
            type="text"
            placeholder="Enter discount percentage"
            value={product.price.discount_percentage}
            onChange={handlePriceChange}
            className="bg-gray-50 focus:bg-white transition-colors"
          />
        </div>
      </div>
      <div className='mb-2'>
        <p>Discounted Price: {product.price.discounted || product.price.original}</p>
      </div>
      <div className='w-full flex flex-wrap'>
        <div className='mb-2 w-full md:w-1/2'>
          <Checkbox
            label="Price Includes Taxes"
            name="includes_taxes"
            checked={product.price.includes_taxes}
            onChange={(e) => handleChange(e, 'price')}
            className="accent-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingInfo;