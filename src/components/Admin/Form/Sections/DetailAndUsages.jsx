import React from 'react';
import TextArea from '../../../core/TextArea';

const DetailsAndUsage = ({ product, handleChange, errors }) => (
  <div>
    <h2 className="text-xl font-bold mb-2">Details & Usage</h2>
    <div className="mb-2">
      <TextArea
        label="Short Description"
        id="short"
        name="short"
        value={product.description.short}
        onChange={(e) => handleChange(e, 'description')}
        error={errors['description.short']}
        rows={2}
        className="bg-gray-50 focus:bg-white transition-colors"
      />
    </div>
    <div className="mb-2">
      <TextArea
        label="Long Description"
        id="long"
        name="long"
        value={product.description.long}
        onChange={(e) => handleChange(e, 'description')}
        error={errors['description.long']}
        rows={4}
        className="bg-gray-50 focus:bg-white transition-colors"
      />
    </div>
    <div className="mb-2">
      <TextArea
        label="Side Effects"
        id="side_effects"
        name="side_effects"
        value={product.usage.side_effects}
        onChange={(e) => handleChange(e, 'usage')}
        rows={2}
        className="bg-gray-50 focus:bg-white transition-colors"
      />
    </div>
    <div className="mb-2">
      <TextArea
        label="Precautions"
        id="precautions"
        name="precautions"
        value={product.usage.precautions}
        onChange={(e) => handleChange(e, 'usage')}
        rows={2}
        className="bg-gray-50 focus:bg-white transition-colors"
      />
    </div>
  </div>
);

export default DetailsAndUsage;

