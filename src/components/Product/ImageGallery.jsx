import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
        <img
          src={selectedImage}
          alt={`Product`}
          className="w-full h-full object-center object-cover cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`aspect-w-1 aspect-h-1 rounded-md overflow-hidden cursor-pointer ${
              selectedImage === image ? 'ring-2 ring-indigo-500' : ''
            }`}
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full h-full object-center object-cover"
            />
          </div>
        ))}
      </div>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-3xl bg-white rounded-lg shadow-xl">
            <img src={selectedImage} alt="Zoomed product" className="w-full h-auto" />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 p-1 rounded-md text-gray-400 hover:text-gray-500"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default ImageGallery;

