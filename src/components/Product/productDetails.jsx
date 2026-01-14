import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
// import '../Admin/Form/Sections/styles/formattedDescription.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const formatDescription = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};


const ProductDetails = ({ product }) => {
  const [categories] = useState({
    Description: (  <div className="formatted-description">
      {formatDescription(product.description.long)}
    </div>),
    Usage: (
      <div className='flex flex-col gap-2'>
        <p><strong>Dosage:</strong> {formatDescription(product.usage.dosage)}</p>
        <p><strong>used in:</strong> {formatDescription(product.description.short)}</p>
        <p><strong>Instructions:</strong> {formatDescription(product.usage.instructions)}</p>
        <p><strong>Side Effects:</strong> {formatDescription(product.usage.side_effects)}</p>
        <p><strong>Precautions:</strong> { formatDescription(product.usage.precautions)}</p>
      </div>
    ),
    Storage: (
      <div className="formatted-description">
      {formatDescription(product.storage)}
      </div>
      ),
    Manufacturer: (
      <div>
        <p><strong>Name:</strong> {product.manufacturer_details.name}</p>
        <p><strong>Address:</strong> {product.manufacturer_details.address}</p>
        <p><strong>License:</strong> {product.manufacturer_details.license}</p>
      </div>
    ),
  });

  return (
    <div className="mt-16">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((content, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl bg-white p-3',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
              )}
            >
              <div className="text-sm text-gray-700 text-justify">{content}</div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ProductDetails;

