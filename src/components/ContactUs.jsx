import React from 'react';
import bottom from '../assets/bottom.svg';
import Rimage from '../assets/a157.png';

const ContactUs = ({ isHomePage = false }) => {
  return (
    <div className={`py-10 px-4 sm:px-6 lg:px-8 ${isHomePage ? 'bg-white' : 'bg-gradient-to-b from-[#e2ebf0] to-[#cfd9df]'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#26b5c6]">
            Contact Us
          </h2>
          <img className="mx-auto w-24 sm:w-32 md:w-40 mt-2" src={bottom} alt="Decorative bottom" />
        </div>

        <div className={`${isHomePage ? 'bg-white shadow-lg' : 'bg-[radial-gradient(circle,_rgba(238,174,202,1)_0%,_rgba(148,187,233,1)_100%)]'} rounded-lg overflow-hidden`}>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
              <form className="space-y-6" action="submit">
                <InputField label="Name" type="text" name="name" placeholder="Enter Your Name" />
                <InputField label="Phone Number" type="tel" name="phoneNumber" placeholder="Enter Your Number (e.g., 9023920**)" />
                <InputField label="Email" type="email" name="email" placeholder="Enter Email (e.g., abc@gmail.com)" />
                <TextAreaField label="Enter Message" name="message" placeholder="Enter Your Query or Message" />
                <SubmitButton />
              </form>
            </div>

            <div className={`w-full lg:w-1/2 ${isHomePage ? 'bg-gray-50' : 'bg-[#f0f7fa]'} flex items-center justify-center p-8`}>
              <img 
                src={Rimage} 
                alt="Contact illustration" 
                className="max-w-full h-[22rem] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, type, name, placeholder }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-bold text-[#295276]">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className="mt-1 block w-full rounded-md border-l-green-600 border-r-green-700 border-2 border-y-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-[#26b5c6] focus:outline-none focus:ring-1 focus:ring-[#26b5c6] sm:text-sm"
    />
  </div>
);

const TextAreaField = ({ label, name, placeholder }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-bold text-[#295276]">
      {label}
    </label>
    <textarea
      name={name}
      id={name}
      rows="4"
      placeholder={placeholder}
      className="mt-1 block w-full rounded-md border-l-green-600 border-r-green-700 border-2 border-y-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-[#26b5c6] focus:outline-none focus:ring-1 focus:ring-[#26b5c6] sm:text-sm"
    ></textarea>
  </div>
);

const SubmitButton = () => (
  <div>
    <button
      type="submit"
      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#26b5c6] hover:bg-[#1e8e9d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#26b5c6] transition duration-150 ease-in-out"
    >
      Submit
    </button>
  </div>
);

export default ContactUs;

