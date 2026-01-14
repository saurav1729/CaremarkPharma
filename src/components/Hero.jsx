"use client"
import Carousel from "./Carousel"
import { MdOutlinePayments } from "react-icons/md"
import { BiSolidOffer } from "react-icons/bi"
import { ThumbsUp } from "lucide-react"
import { ArrowRight, Truck, Check } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import OptimizedHealthcareHero from "./HealthCareHero"
import { CertificationRibbon } from "./CertificationRibbon"
const Hero = () => {
  const navigate = useNavigate()
  return (
    <div className="pt-16 lg:pt-[7rem] pb-12 sm:pt-22 md:pt-20 md:pb-16 w-full bg-gradient-to-r from-blue-50 via-sky-50 to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full filter blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="flex flex-col lg:flex-col items-center text-center md:text-left justify-between w-[92%] lg:w-[100%] max-w-[90%] mx-auto gap-8 lg:gap-7 mt-6 md:mt-8 lg:mt-8">
        <motion.div
          className=" flex  w-3/4  flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2justify-center mb-2 b-3">
            <div className="h-px w-16 mr-1 bg-gradient-to-r from-transparent to-[#26b5c6]"></div>
            <span className="text-2xl font-bold text-[#11abbd] tracking-widest uppercase">Caremark Pharmaceutical</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#26b5c6]"></div>
          </div>
     <h2
  className="text-orange-700 tracking-wide max-w-2xl leading-relaxed"
  style={{ fontFamily: "'Pacifico', cursive", fontSize: '1.5rem' }}
>
“आरोग्यं परमं भाग्यम्”
</h2>

        </motion.div>

        {/* Carousel */}
        <motion.div
          className="w-full "
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-700">Certified Products</span>
              </div>
              <div>
                <Carousel />
              </div>
            </div>
          </div>
        </motion.div>

        <OptimizedHealthcareHero/>

     
      </div>
    </div>
  )
}

export default Hero
