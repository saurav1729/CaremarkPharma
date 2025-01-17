import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import bottom from '../assets/bottom.svg';
import Rimage from '../assets/a157.png';
import AuthContext from '../../Context/AuthContext';
import { api } from '../service';
import { useNavigate } from 'react-router-dom';

const ContactUs = ({ isHomePage = false }) => {
  const authCtx = useContext(AuthContext); 
  const [formData, setFormData] = useState({
    name: authCtx.user?.name || '',
    phoneNumber: '',
    email: authCtx.user?.email || '',
    message: ''
  });

  const navigate =useNavigate(); 
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      name: authCtx.user?.name || '',
      email: authCtx.user?.email || ''
    }));
  }, [authCtx.user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      if(!authCtx.isLoggedIn){
        navigate('/login');
        return;
      }
      const response = await api.post('/api/contact', formData, {
        headers: {
          Authorization: `Bearer ${authCtx.token}`
        }
      });
      setSubmitMessage(response.data.message);
      setFormData({ name: authCtx.user?.name || '', phoneNumber: '', email: authCtx.user?.email || '', message: '' });
    } catch (error) {
      setSubmitMessage(error.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form className="space-y-6" onSubmit={handleSubmit}>
                <InputField 
                  label="Name" 
                  type="text" 
                  name="name" 
                  placeholder="Enter Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  disabled={authCtx.isLoggedIn}
                />
                <InputField 
                  label="Phone Number" 
                  type="tel" 
                  name="phoneNumber" 
                  placeholder="Enter Your Number (e.g., 9023920**)" 
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <InputField 
                  label="Email" 
                  type="email" 
                  name="email" 
                  placeholder="Enter Email (e.g., abc@gmail.com)" 
                  value={formData.email}
                  onChange={handleChange}
                  disabled={authCtx.isLoggedIn}
                />
                <TextAreaField 
                  label="Enter Message" 
                  name="message" 
                  placeholder="Enter Your Query or Message" 
                  value={formData.message}
                  onChange={handleChange}
                />
                <SubmitButton isSubmitting={isSubmitting} />
                {submitMessage && (
                  <div className={`mt-2 text-sm ${submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                    {submitMessage}
                  </div>
                )}
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

const InputField = ({ label, type, name, placeholder, value, onChange, disabled }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-bold text-[#295276]">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="mt-1 block w-full rounded-md border-l-green-600 border-r-green-700 border-2 border-y-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-[#26b5c6] focus:outline-none focus:ring-1 focus:ring-[#26b5c6] sm:text-sm disabled:bg-gray-100"
      required
    />
  </div>
);

const TextAreaField = ({ label, name, placeholder, value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-bold text-[#295276]">
      {label}
    </label>
    <textarea
      name={name}
      id={name}
      rows="4"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full rounded-md border-l-green-600 border-r-green-700 border-2 border-y-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-[#26b5c6] focus:outline-none focus:ring-1 focus:ring-[#26b5c6] sm:text-sm"
      required
    ></textarea>
  </div>
);

const SubmitButton = ({ isSubmitting }) => (
  <div>
    <button
      type="submit"
      disabled={isSubmitting}
      className="w-full z-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#26b5c6] hover:bg-[#1e8e9d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#26b5c6] transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isSubmitting ? 'Submitting...' : 'Submit'}
    </button>
  </div>
);

export default ContactUs;
