import React from 'react';
import { FaHardHat, FaCog } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400">
      <div className="text-center p-8 bg-white rounded-lg shadow-2xl">
        <div className="flex justify-center mb-4">
          <FaHardHat className="text-6xl text-yellow-500 mr-2" />
          <FaCog className="text-6xl text-gray-600 animate-spin" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Under Construction</h1>
        <p className="text-xl text-gray-600 mb-8">
          We're working hard to bring you an amazing About page. Check back soon!
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 overflow-hidden">
          <div className="bg-blue-600 h-2.5 rounded-full w-3/4 animate-pulse"></div>
        </div>
        <p className="text-gray-500">75% Complete</p>
      </div>
    </div>
  );
};

export default About;

