"use client"

import { useRef, useState, useEffect } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
import { FaMapMarkerAlt, FaPhone, FaClock } from "react-icons/fa"
import { AnimatedHealthcareVisual } from "../components/AnimatedHealthcareVisual"
// import Image from "next/image" // Import Next.js Image component

export const ContainerScroll = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <div
      className="py-5 flex flex-col items-center justify-center relative overflow-hidden my-16 md:my-24"
      ref={containerRef}
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full filter blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <Header translate={translate} />
      <Card rotate={rotate} translate={translate} scale={scale} />
    </div>
  )
}

const Header = ({ translate }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="text-center z-10 mb-10"
    >
      <div className="inline-block px-4 py-1 mb-3 text-sm font-medium text-[#26b5c6] bg-teal-50 border border-teal-100 rounded-full">
        Visit Our Location
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#293649]">
        Find Us <span className="text-[#26b5c6]">on the Map</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-[#26b5c6] to-[#1d95a3] mx-auto mt-4 rounded-full"></div>
    </motion.div>
  )
}

const Card = ({ rotate, scale }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
      }}
      className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
    >
      <div className="md:flex">
        <div className="md:w-1/2 p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-[#26b5c6] mb-6">Our Location</h3>
          <div className="space-y-6">
            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-50 text-[#26b5c6] mt-1 mr-4 flex-shrink-0">
                <FaMapMarkerAlt className="text-lg" />
              </div>
              <p className="text-gray-700">Haridwar City (Near Mantra Township), Haridwar - 249401</p>
            </motion.div>

          

            <motion.div
              className="flex items-start"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-50 text-[#26b5c6] mt-1 mr-4 flex-shrink-0">
                <FaClock className="text-lg" />
              </div>
              <div>
                <p className="text-gray-700 font-medium">Business Hours</p>
                <p className="text-gray-600 mt-1">Mon-Sat: 10:00 AM - 5:00 PM</p>
              </div>
            </motion.div>
          </div>

          <motion.button
            className="mt-8 px-6 py-3 bg-gradient-to-r from-[#26b5c6] to-[#1d95a3] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Directions
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </div>

        {/* Map Image Section */}
           <div className="md:w-1/2 h-72 md:h-auto relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute inset-0"
          >
            <AnimatedHealthcareVisual />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default ContainerScroll