import React from 'react';
import ContactUs from '../components/ContactUs';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e2ebf0] to-[#cfd9df]">
      <div className="container pt-[7rem] mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-[#295276] mb-8">Get in Touch</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          We're here to help and answer any question you might have. We look forward to hearing from you!
        </p>
        <ContactUs />
      </div>
    </div>
  );
};

export default Contact;

