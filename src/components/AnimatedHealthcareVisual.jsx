"use client"

import { motion } from "framer-motion"

export const AnimatedHealthcareVisual = () => {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  }

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.7, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  }

  const floatVariants = {
    animate: (i) => ({
      y: [0, -15, 0],
      transition: {
        duration: 3 + i * 0.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    }),
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 p-8">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-blue-200 rounded-full filter blur-2xl opacity-30"
          animate={{ scale: [1, 1.2, 1], rotate: 360 }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-40 h-40 bg-teal-200 rounded-full filter blur-3xl opacity-20"
          animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Central hub */}
        <div className="flex justify-center mb-12">
          <motion.div className="relative" variants={pulseVariants} animate="animate">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#26b5c6] to-[#1d95a3] flex items-center justify-center shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#26b5c6]"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </div>

        {/* Top row of icons */}
        {/* <div className="grid grid-cols-3 gap-6 mb-8">
          {[
            { icon: "💊", label: "Pharmacy" },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center"
              animate={floatVariants}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl mb-2 border border-teal-100"
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 10px 30px rgba(38, 181, 198, 0.3)",
                }}
              >
                {item.icon}
              </motion.div>
              <p className="text-sm font-medium text-gray-700 text-center">{item.label}</p>
            </motion.div>
          ))}
        </div> */}

        {/* Middle row - connecting lines with icons */}
        {/* <div className="flex items-center justify-center gap-4 mb-8">
          {[
            { icon: "🔬", label: "Lab" },
            { icon: "📋", label: "Records" },
            { icon: "⚡", label: "Emergency" },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i + 3}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center"
              animate={floatVariants}
            >
              <motion.div
                className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-2xl border border-blue-100"
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 10px 25px rgba(38, 181, 198, 0.25)",
                }}
              >
                {item.icon}
              </motion.div>
              <p className="text-xs font-medium text-gray-600 text-center mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div> */}

        {/* Bottom row of icons */}
        {/* <div className="grid grid-cols-3 gap-6">
          {[
            { icon: "❤️", label: "Cardio" },
            { icon: "🧬", label: "Surgery" },
            { icon: "👶", label: "Pediatrics" },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i + 6}
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center"
              animate={floatVariants}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-3xl mb-2 border border-teal-100"
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 10px 30px rgba(38, 181, 198, 0.3)",
                }}
              >
                {item.icon}
              </motion.div>
              <p className="text-sm font-medium text-gray-700 text-center">{item.label}</p>
            </motion.div>
          ))}
        </div> */}

        {/* Animated connecting lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ filter: "drop-shadow(0 0 2px rgba(38, 181, 198, 0.3))" }}
        >
          <motion.line
            x1="50%"
            y1="20%"
            x2="50%"
            y2="50%"
            stroke="url(#gradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#26b5c6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1d95a3" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  )
}
