"use client"

import { ArrowRight, ThumbsUp, Truck } from "lucide-react"
import { MdOutlinePayments } from "react-icons/md"
import { BiSolidOffer } from "react-icons/bi"
import { motion } from "framer-motion"

const router = {
  push: (path) => console.log(`Navigating to: ${path}`),
}

const OptimizedHealthcareHero = () => {
  const PRIMARY_COLOR = "#0ea5e9" // Vibrant cyan-blue
  const PRIMARY_DARK = "#0284c7" // Deep cyan
  const ACCENT_COLOR = "#06b6d4" // Turquoise
  const SUCCESS_COLOR = "#10b981" // Fresh green
  const BG_COLOR = "bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50"
  const TEXT_COLOR = "text-slate-700"

  const featureData = [
    {
      icon: ThumbsUp,
      title: "Genuine Medicine",
      description: "Only 100% authentic products, verified and certified by health authorities.",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: BiSolidOffer,
      title: "Exclusive Offers",
      description: "Special discounts, seasonal promotions, and member-only deals daily.",
      gradient: "from-cyan-500/20 to-teal-500/20",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to your location within 24-48 hours.",
      gradient: "from-emerald-500/20 to-green-500/20",
    },
    {
      icon: MdOutlinePayments,
      title: "Multiple Payments",
      description: "Flexible payment options including cards, wallets, and bank transfers.",
      gradient: "from-teal-500/20 to-cyan-500/20",
    },
  ]

  const cardVariants = {
    initial: { y: 0, scale: 1, opacity: 0.8 },
    hover: {
      y: -8,
      scale: 1.05,
      opacity: 1,
      boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2), 0 8px 16px rgba(14, 165, 233, 0.15)",
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const FeatureBlock = ({ icon: Icon, title, description, gradient, index }) => (
    <motion.div
      className={`relative p-6 rounded-2xl bg-gradient-to-br ${gradient} border border-cyan-200/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden`}
      initial="initial"
      whileHover="hover"
      variants={cardVariants}
      transition={{ type: "spring", stiffness: 400, damping: 10, delay: index * 0.08 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative flex items-start gap-4 z-10">
        <motion.div
          className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300`}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>
        <div className="flex-1">
          <h3 className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-1">
            {title}
          </h3>
          <p className={`text-sm ${TEXT_COLOR} leading-relaxed`}>{description}</p>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className={`w-full mt-3 md:mt-12 lg:mt-16 px-4 sm:px-6 lg:px-8 `}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 py-6">
        {/* Left Column - Main Text Section */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center py-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-snug">
            <span className="text-slate-900">Quality Healthcare</span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              At Your Fingertips
            </motion.span>
          </h1>

          <motion.p
            className={`text-xl ${TEXT_COLOR} mb-10 max-w-xl leading-relaxed border-l-4 border-cyan-500 pl-6 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 py-3 rounded-r-lg`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Caremark Pharmaceutical delivers trusted medicines and healthcare products since 2021.
            <motion.span className="font-bold text-slate-900 block mt-2" whileHover={{ x: 4 }}>
              Your health is our priority.
            </motion.span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-start"
          >
            <motion.button
              onClick={() => router.push("/medicines")}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500  to-black text-white font-bold text-lg rounded-full shadow-xl shadow-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/60 transition-all duration-300 flex items-center gap-3 group border border-cyan-400/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Products
              <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Column - Premium Feature Grid */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center items-center "
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
            <div className="w-auto grid grid-cols-1 md:grid-cols-2 gap-6 h-auto">
          {featureData.map((feature, index) => (
            <FeatureBlock key={index} {...feature} index={index} />
          ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default OptimizedHealthcareHero
