import React from 'react';
import { BiRupee } from 'react-icons/bi';

const formatDescription = (text) => {
  return text &&text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const FormReview = ({ product }) => (
  <div>
    <h2 className="text-xl font-bold mb-2">Review Your Product</h2>
    {console.log(product)}
    <div className="space-y-2 text-sm">
      <ReviewSection title="Basic Information">
        <ReviewItem label="Name" value={product.name} />
        <ReviewItem label="Manufacturer" value={formatDescription(product.manufacturer)} />
        <ReviewItem label="Composition" value={formatDescription(product.composition)} />
        <ReviewItem label="Package Size" value={formatDescription(product.package_size)} />
        <ReviewItem label="Prescription Required" value={product.prescription_required ? 'Yes' : 'No'} />
      </ReviewSection>

      <ReviewSection title="Pricing & Inventory">
      <ReviewItem label="Original Price" value={<><div className='flex justify-center items-center'>
        <BiRupee />{product.price.original}
      </div>
       
        </>} />
      <ReviewItem label="Discounted Price" value={<>
        <div className='flex justify-center items-center'>
        <BiRupee />{product.price.discounted}</div></>} />
        
        <ReviewItem label="Discount Percentage" value={`${product.price.discount_percentage}%`} />
        <ReviewItem label="Stock Quantity" value={product.stock_quantity} />
        <ReviewItem label="Includes Taxes" value={product.price.includes_taxes ? 'Yes' : 'No'} />
      </ReviewSection>

      <ReviewSection title="Details & Usage">
        <ReviewItem label="Short Description" value={formatDescription(product.description.short)} />
        <ReviewItem label="Long Description" value={formatDescription(product.description.long)} />
        <ReviewItem label="Side Effects" value={formatDescription(product.usage.side_effects)} />
        <ReviewItem label="Precautions" value={formatDescription(product.usage.precautions)} />
      </ReviewSection>

      <ReviewSection title="Manufacturer & Batch Information">
        <ReviewItem label="Manufacturer Name" value={formatDescription(product.manufacturer_details.name)} />
        <ReviewItem label="Manufacturer Address" value={formatDescription(product.manufacturer_details.address)} />
        <ReviewItem label="Manufacturer License" value={formatDescription(product.manufacturer_details.license)} />
        <ReviewItem label="Batch Number" value={formatDescription(product.batch_info.number)} />
        <ReviewItem label="Manufacturing Date" value={formatDescription(product.batch_info.manufacturing_date)} />
        <ReviewItem label="Expiry Date" value={formatDescription(product.batch_info.expiry_date)} />
      </ReviewSection>
    </div>
  </div>
);

const ReviewSection = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <div className="bg-gray-100 p-2 rounded-lg">{children}</div>
  </div>
);

const ReviewItem = ({ label, value }) => (
  <div className="flex justify-between py-1">
    <span className="font-medium">{label}:</span>
    <span className="text-gray-600">{value}</span>
  </div>
);

export default FormReview;
