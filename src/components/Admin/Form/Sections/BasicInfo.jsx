import React from 'react';
import Input from '../../../core/Input';
import TextArea from '../../../core/TextArea';
import Select from '../../../core/Select';
import ImageUpload from '../ImageUpload';

const BasicInfo = ({ product, handleChange, errors }) => (
  <div>
    <h2 className="text-xl font-bold mb-2">Basic Information</h2>
    <div className='w-full flex flex-wrap'>
      <div className="mb-2 w-full md:w-1/2 md:pr-2">
        <Input
          label="Name"
          id="name"
          name="name"
          placeholder="Enter product name"
          value={product.name}
          onChange={handleChange}
          error={errors.name}
          className="bg-gray-50 focus:bg-white transition-colors"
        />
      </div>
      <div className="mb-2 w-full md:w-1/2 md:pl-2">
        <Input
          label="Manufacturer"
          id="manufacturer"
          name="manufacturer"
          placeholder="Enter manufacturer"
          value={product.manufacturer}
          onChange={handleChange}
          error={errors.manufacturer}
          className="bg-gray-50 focus:bg-white transition-colors"
        />
      </div>
    </div>
    <TextArea
      label="Composition"
      id="composition"
      name="composition"
      placeholder="Enter the composition details"
      value={product.composition}
      onChange={handleChange}
      error={errors.composition}
      className="bg-gray-50 focus:bg-white transition-colors"
    />
    <div className='w-full flex flex-wrap'>
      <div className='mb-2 w-full md:w-1/2 md:pr-2'>
        <Select
          label="Package Size"
          id="package_size"
          name="package_size"
          value={product.package_size}
          onChange={handleChange}
          options={[
            { value: "10 Capsules", label: "10 Capsules" },
            { value: "15 Capsules", label: "15 Capsules" },
            { value: "20 Capsules", label: "20 Capsules" },
            { value: "50 Capsules", label: "50 Capsules" },
          ]}
          className="bg-gray-50 focus:bg-white transition-colors"
        />
      </div>
      <div className='mb-2 w-full md:w-1/2 md:pl-2'>
        <Select
          label="Availability"
          id="availability"
          name="availability"
          value={product.availability}
          onChange={handleChange}
          options={[
            { value: "in stock", label: "In Stock" },
            { value: "out of stock", label: "Out of Stock" }
          ]}
          className="bg-gray-50 focus:bg-white transition-colors"
        />
      </div>
    </div>
    <div className='w-full flex flex-wrap'>
      <div className='mb-2 w-full'>
        <ImageUpload
          images={product.images || []}
          onImageChange={(newImages) => handleChange({ target: { name: 'images', value: newImages } })}
        />
      </div>
    </div>
  </div>
);

export default BasicInfo;