import React from 'react';
import ContactUs from '../components/ContactUs';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const location = useLocation(); 
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e2ebf0] to-[#cfd9df]">
      <Helmet>
        <title>Contact Us - Caremark Pharmaceutical</title>
        <meta 
          name="description" 
          content="Get in touch with Caremark Pharmaceutical. Contact us for inquiries about our pharmaceutical products and services." 
        />
        <link rel="canonical" href={`https://www.caremarkpharmaceutical.com${location.pathname}`} />
      </Helmet>
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

