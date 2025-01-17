import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa";

export const ContainerScroll = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div
      className="min-h-screen py-20 flex flex-col items-center justify-center relative  overflow-hidden my-[2rem] sm:my-[5rem] "
      ref={containerRef}
    >
      <Header translate={translate} />
      <Card rotate={rotate} translate={translate} scale={scale} />
    </div>
  );
};

const Header = ({ translate }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="text-center  z-10"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#26b5c6]">
       Find Us on the map
      </h2>
      {/* <p className="text-lg text-gray-600">Find us on the map and drop by!</p> */}
    </motion.div>
  );
};

const Card = ({ rotate, scale }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden "
    >
      <div className="md:flex">
        <div className="md:w-1/2 p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-[#26b5c6] mb-4">Our Location</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-[#26b5c6] mt-1 mr-3" />
              <p className="text-gray-700">Haridwar City (Near Mantra Township), Haridwar - 249401</p>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-[#26b5c6] mr-3" />
              <p className="text-gray-700">(123) 456-7890</p>
            </div>
            <div className="flex items-start">
              <FaClock className="text-[#26b5c6] mt-1 mr-3" />
              <div>
                <p className="text-gray-700">Mon-Fri: 9:00 AM - 8:00 PM</p>
                <p className="text-gray-700">Sat-Sun: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 h-64\\ md:h-auto">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d263.5172798760566!2d85.98098523359182!3d26.64880085881926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec3ffa6b3ea819%3A0xb0fbc3d7026efa04!2sJha%20Steel%20Udyog!5e0!3m2!1sen!2sin!4v1727237648843!5m2!1sen!2sin" 
            className="w-full h-full border-0" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </motion.div>
  );
};

export default ContainerScroll;

