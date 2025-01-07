import React from 'react';

const ManufacturerAndBatch = ({ product, handleChange, errors }) => (
  <div>
    <h2 className="text-xl font-bold mb-2">Manufacturer & Batch Information</h2>
    <div className="mb-2">
      <label className="block text-sm font-bold mb-1" htmlFor="manufacturer_name">Manufacturer Name</label>
      <input
        className={`w-full px-2 py-1 text-sm border rounded ${errors['manufacturer_details.name'] ? 'border-red-500' : ''}`}
        id="manufacturer_name" name="name" value={product.manufacturer_details.name}
        onChange={(e) => handleChange(e, 'manufacturer_details')}
      />
      {errors['manufacturer_details.name'] && <p className="text-red-500 text-xs">{errors['manufacturer_details.name']}</p>}
    </div>
    <div className="mb-2">
      <label className="block text-sm font-bold mb-1" htmlFor="manufacturer_address">Manufacturer Address</label>
      <textarea
        className="w-full px-2 py-1 text-sm border rounded"
        id="manufacturer_address" name="address" value={product.manufacturer_details.address}
        onChange={(e) => handleChange(e, 'manufacturer_details')} rows="2"
      />
    </div>
    <div className="mb-2">
      <label className="block text-sm font-bold mb-1" htmlFor="manufacturer_license">Manufacturer License</label>
      <input
        className="w-full px-2 py-1 text-sm border rounded"
        id="manufacturer_license" name="license" value={product.manufacturer_details.license}
        onChange={(e) => handleChange(e, 'manufacturer_details')}
      />
    </div>
    <div className="mb-2">
      <label className="block text-sm font-bold mb-1" htmlFor="batch_number">Batch Number</label>
      <input
        className={`w-full px-2 py-1 text-sm border rounded ${errors['batch_info.number'] ? 'border-red-500' : ''}`}
        id="batch_number" name="number" value={product.batch_info.number}
        onChange={(e) => handleChange(e, 'batch_info')}
      />
      {errors['batch_info.number'] && <p className="text-red-500 text-xs">{errors['batch_info.number']}</p>}
    </div>
    <div className="mb-2">
      <label className="block text-sm font-bold mb-1" htmlFor="manufacturing_date">Manufacturing Date</label>
      <input
        className="w-full px-2 py-1 text-sm border rounded"
        id="manufacturing_date" name="manufacturing_date" type="date"
        value={product.batch_info.manufacturing_date}
        onChange={(e) => handleChange(e, 'batch_info')}
      />
    </div>
    <div className="mb-2">
      <label className="block text-sm font-bold mb-1" htmlFor="expiry_date">Expiry Date</label>
      <input
        className={`w-full px-2 py-1 text-sm border rounded ${errors['batch_info.expiry_date'] ? 'border-red-500' : ''}`}
        id="expiry_date" name="expiry_date" type="date"
        value={product.batch_info.expiry_date}
        onChange={(e) => handleChange(e, 'batch_info')}
      />
      {errors['batch_info.expiry_date'] && <p className="text-red-500 text-xs">{errors['batch_info.expiry_date']}</p>}
    </div>
  </div>
);

export default ManufacturerAndBatch;

