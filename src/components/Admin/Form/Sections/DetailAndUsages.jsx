import React from 'react';

const DetailsAndUsage = ({ product, handleChange, errors }) => (
  <div>
    <h2 className="text-xl font-bold mb-2">Details & Usage</h2>
    <div className="mb-2">
      <label className="block text-sm font-bold mb-1" htmlFor="short">Short Description</label>
      <textarea
        className={`w-full px-2 py-1 text-sm outline-none border rounded ${errors['description.short'] ? 'border-red-500' : ''}`}
        id="short" name="short" value={product.description.short}
        onChange={(e) => handleChange(e, 'description')} rows="2"
      />
      {errors['description.short'] && <p className="text-red-500 text-xs">{errors['description.short']}</p>}
    </div>
    <div className="mb-2">
      <label className="block text-sm font-bold mb-1" htmlFor="long">Long Description</label>
      <textarea
        className={`w-full px-2 py-1 outline-none text-sm border rounded ${errors['description.long'] ? 'border-red-500' : ''}`}
        id="long" name="long" value={product.description.long}
        onChange={(e) => handleChange(e, 'description')} rows="4"
      />
      {errors['description.long'] && <p className="text-red-500 text-xs">{errors['description.long']}</p>}
    </div>
    <div className="mb-2">
      <label className="block text-sm font-bold mb-1" htmlFor="side_effects">Side Effects</label>
      <textarea
        className="w-full px-2 py-1 text-sm border rounded"
        id="side_effects" name="side_effects" value={product.usage.side_effects}
        onChange={(e) => handleChange(e, 'usage')} rows="2"
      />
    </div>
    <div className="mb-2">
      <label className="block text-sm font-bold mb-1" htmlFor="precautions">Precautions</label>
      <textarea
        className="w-full px-2 py-1 text-sm border rounded"
        id="precautions" name="precautions" value={product.usage.precautions}
        onChange={(e) => handleChange(e, 'usage')} rows="2"
      />
    </div>
  </div>
);

export default DetailsAndUsage;

