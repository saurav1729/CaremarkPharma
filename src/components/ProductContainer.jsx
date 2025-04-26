"use client"
import { Link } from "react-router-dom"
import { FaLongArrowAltRight } from "react-icons/fa"
import ProductCard from "./Card"
import { motion } from "framer-motion"

const ProductContainer = ({ cardData, page }) => {
  return (
    <div className="relative py-2  w-full overflow-x-hidden" style={{ paddingTop: page === "product" ? "10rem" : "" }}>
      {/* Enhanced Header */}
      <motion.div
        className="text-center z-10 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-block px-4 py-1 mb-3 text-sm font-medium text-[#26b5c6] bg-teal-50 border border-teal-100 rounded-full">
          Explore Our Products
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#293649]">
          Our <span className="text-[#26b5c6]">Medicines</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#26b5c6] to-[#1d95a3] mx-auto mt-4 rounded-full"></div>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover our range of high-quality pharmaceutical products designed for your health and wellbeing.
        </p>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        className={`w-11/12 mx-auto grid gap-8 ${
          page === "product"
            ? "grid-cols-1 w-[90%] flex justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "w-[84%] ml-auto mr-auto md:gap-[2rem] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {cardData.map((event, index) => (
          <motion.div
            key={event._id || index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <ProductCard data={event} page={page} />
          </motion.div>
        ))}
      </motion.div>

      {/* See All Link */}
      {page !== "product" && (
        <motion.div
          className="w-full mt-12 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/medicines">
            <motion.div
              className="px-6 py-3 bg-gradient-to-r from-[#26b5c6] to-[#1d95a3] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See All Products
              <FaLongArrowAltRight className="group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </Link>
        </motion.div>
      )}
    </div>
  )
}

export default ProductContainer
