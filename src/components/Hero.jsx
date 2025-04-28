import React from "react"
import Carousel from "./Carousel"
import { FaRegThumbsUp } from "react-icons/fa"
import { MdOutlinePayments } from "react-icons/md"
import { CiDeliveryTruck } from "react-icons/ci"
import { BiSolidOffer } from "react-icons/bi"
import { ThumbsUp, Clock, ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-16 lg:pt-[7rem] pb-12 sm:pt-22 md:pt-20 md:pb-16 w-full bg-gradient-to-r from-blue-50 via-sky-50 to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full filter blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="flex flex-col-reverse lg:flex-row items-center text-center md:text-left justify-between w-[92%] lg:w-[100%] max-w-[90%] mx-auto gap-8 lg:gap-12 mt-6 md:mt-8 lg:mt-20">
        {/* Text and Feature List */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated Text Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-[#26b5c6] bg-teal-50 border border-teal-100 rounded-full">
              Trusted Healthcare Partner
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="text-[#293649]">Quality Healthcare</span><br />
              <span className="text-[#26b5c6] relative">
                At Your Fingertips
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#26b5c6] opacity-30" viewBox="0 0 200 8" preserveAspectRatio="none">
                  <path d="M0,5 C50,0 150,0 200,5" fill="none" stroke="currentColor" strokeWidth="3" />
                </svg>
              </span>
            </h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 md:max-w-md  text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Caremark Pharmaceutical delivers trusted medicines and healthcare products since 2021. Your health is our priority.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center items-center md:flex md:justify-normal md:items-start"
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <button onClick={() => navigate('/medicines')} className="px-6 py-3 bg-gradient-to-r from-[#26b5c6] to-[#1d95a3] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 group">
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>


        </motion.div>

        {/* Carousel */}
        <motion.div
          className="w-full lg:w-3/4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-teal-100 rounded-full z-0 hidden md:block"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 rounded-full z-0 hidden md:block"></div>

            <div className="relative z-10  ">
              <div className="absolute -bottom-5 right-10 bg-white py-2 px-4 rounded-full shadow-lg flex items-center gap-2 z-20 hidden md:flex">
                <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Certified Products</span>
              </div>
              <div>
                <Carousel />
              </div>
            </div>

            {/* Trust badge */}

          </div>
        </motion.div>

      </div>
      {/* Feature List */}
      <motion.div
        className="backdrop-blur-[20px] lg:mt-[5rem] w-[92%]   md:w-3/6 mx-auto mt-6 p-5  bg-[#26b5c6]/10 rounded-3xl border border-[#26b5c6]/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >

        <h3 className="text-[#293649]  font-bold mb-4 text-center md:text-left">Why Choose Us</h3>
        <motion.ul
          className="flex flex-wrap justify-center lg:pl-7 lg:justify-start gap-4 md:gap-6"
        >
          <FeatureItem icon={<ThumbsUp className="h-6 w-6" />} text="Genuine Medicine" delay={0.1} />
          <FeatureItem icon={<BiSolidOffer className="h-6 w-6" />} text="Attractive Offers" delay={0.2} />
          <FeatureItem icon={<CiDeliveryTruck className="h-6 w-6" />} text="Timely Delivery" delay={0.3} />
          <FeatureItem icon={<MdOutlinePayments className="h-6 w-6" />} text="Easy Payments" delay={0.4} />
          <FeatureItem icon={<Clock className="h-6 w-6" />} text="Delivery onTime" delay={0.5} />
        </motion.ul>
      </motion.div>
    </div>
  )
}

const FeatureItem = ({ icon, text, delay }) => (
  <motion.li
    className="flex items-center gap-3"
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 0.4 }}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.2 }
    }}
  >
    <motion.div
      className="p-3 rounded-full bg-gradient-to-r from-[#26b5c6] to-[#1d95a3] shadow-md"
      whileHover={{
        boxShadow: "0 8px 15px rgba(38, 181, 198, 0.3)",
        transition: { duration: 0.2 }
      }}
    >
      {React.cloneElement(icon, { className: "text-white text-2xl" })}
    </motion.div>
    <span className="w-24 font-semibold text-[#293649]">{text}</span>
  </motion.li>
)

export default Hero
