"use client"
import { motion } from "framer-motion"

export function CertificationRibbon() {
  return (
    <div className="absolute top-0 right-0 w-40 h-40 overflow-hidden z-20">
      <motion.div
        initial={{ opacity: 0, rotate: -15 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-3 -right-16 w-56 bg-gradient-to-r from-teal-600 to-cyan-500 text-white py-3 px-8 transform rotate-45 shadow-2xl"
        style={{
          boxShadow: "0 4px 20px rgba(0, 128, 128, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        }}
      >
        {/* Ribbon texture overlay */}
        <div className="absolute inset-0 opacity-10 bg-pattern"></div>

        {/* Ribbon content */}
        <div className="relative flex items-center justify-center gap-2">
          {/* Checkmark icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-5 h-5 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>

          {/* Text */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase whitespace-nowrap text-white/95"
          >
            Certified
          </motion.span>
        </div>

        {/* Ribbon fold effect at the end */}
        <div
          className="absolute right-0 top-0 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-teal-800"
          style={{
            borderLeftColor: "transparent",
            borderRightColor: "transparent",
            borderTopColor: "#134e4a",
          }}
        ></div>
      </motion.div>

      {/* Decorative shine effect */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-6 -right-14 w-48 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 blur-sm"
      ></motion.div>
    </div>
  )
}
