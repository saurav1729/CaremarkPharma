import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const PrimaryContainer = (props) => {
  const data = props?.primaryData;

  
  // State to store the currently selected image
  const [selectedImage, setSelectedImage] = useState(data?.imageUrls?.[0]?.url); // Default to the first image

  console.log("data inside primary container", data);

  const handleImageClick = (url) => {
    setSelectedImage(url); // Update the large image when a small image is clicked
  };

  const handleRight = () => {
    const currentIndex = data?.imageUrls?.findIndex(image => image.url === selectedImage);
    const nextIndex = (currentIndex + 1) % data?.imageUrls.length; // Loop back to the first image
    setSelectedImage(data?.imageUrls[nextIndex].url);
  };
  
  const handleLeft = () => {
    const currentIndex = data?.imageUrls?.findIndex(image => image.url === selectedImage);
    const prevIndex = (currentIndex - 1 + data?.imageUrls.length) % data?.imageUrls.length; // Loop to the last image
    setSelectedImage(data?.imageUrls[prevIndex].url);
  };
  

  

  return (
    <div className='w-10/12 mx-auto -mt-4 h-[24rem] flex'>
      {/* Image Thumbnails */}
      <div className='w-[13%] flex flex-col justify-around items-center overflow-y-scroll  no-scrollbar gap-3 mt-3'>
        {
          data?.imageUrls?.map((image, index) => (
            <div className='h-20 w-20 relative' key={index}>
                 <img
              className='h-20 w-20 rounded-md shadow-md shadow-green-900 cursor-pointer'
              src={image.url}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(image.url)} // Change the large image on click
            />
<div 
  className={`absolute top-0 left-0 h-20 w-20 cursor-pointer rounded-xl ${image.url === selectedImage ? 'shadow-2xl  shadow-green-500 rounded-md' : 'bg-white/1 backdrop-blur-[1px]'}`}  onClick={() => handleImageClick(image.url)} >
</div>


            </div>
         
          ))
        }
      </div>

      {/* Name and Info Section */}
      <div className='w-[40%] h-full p-4'>
          <div className='text-[2.5rem] bg-gradient-to-b from-[#20b8c3] to-[#2a324c] bg-clip-text text-transparent font-semibold'>{data.name}</div>
          <div className='text-[1.2rem] flex flex-col  font-sans text-pretty text-[#1c1c1c90]'> 
          <div>{data.manufacturer}</div>
          <div>{data.composition}</div>
          <div>{data.price.original}</div>
          <div>Package Size: {data.package_size}</div>
          <div>{data.availablity}</div>
          <div>{data.details.autenticiy}</div>
          <div>{data.details.shipping}</div>
          <div>{data.details.return_policy}</div>
          </div>

      </div>

      {/* Large Image Section */}
      <div className='w-[45%] h-full relative'>
        <div className='absolute right-4  top-[50%] cursor-pointer' onClick={handleRight}><FaArrowRight/></div>
        <div className='absolute left-4  top-[50%] cursor-pointer' onClick={handleLeft}><FaArrowLeft/></div>
        <img className='h-full w-full rounded-lg shadow-lg' src={selectedImage} alt="Selected" />
      </div>
    </div>
  );
}

export default PrimaryContainer;
