"use client"

import React from "react"
import { motion } from "framer-motion"

const leaders = [
  {
    name: "Abdhesh Kumar Jha",
    role: "Managing Director",
    image: "https://res.cloudinary.com/df6sjkg3j/image/upload/v1768390973/57e809f0cf20c-bpfull-1_1_fuigyp.jpg",
    // This image will be clickable
    linkedin: "", 
  },
  {
    name: "Satyam Kumar Jha",
    role: "Manager – Admin & HR",
    image: "https://res.cloudinary.com/df6sjkg3j/image/upload/v1768390505/Gemini_Generated_Image_9190qw9190qw9190__1_-removebg-preview_pmxmwg.png",
    // This image will NOT be clickable (no anchor tag)
    linkedin: "https://www.linkedin.com/in/satyamkrjhaa", 
  },
]

const CompanyLeadership = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl"
    >
      <h3 className="text-xl -mt-2 font-semibold text-[#293649] mb-3 text-center md:text-left">
        Leadership Team
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="bg-white rounded-lg transition flex flex-col items-center text-center pb-4"
          >
            {/* Image Container with Conditional Linking */}
            <div className="mb-4">
              {leader.linkedin ? (
                // If LinkedIn URL exists, wrap image in Anchor tag
                <a 
                  href={leader.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block" // Ensures anchor behaves correctly layout-wise
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-teal-200 shadow-sm cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </a>
              ) : (
                // Else just show the image
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-teal-200 shadow-sm cursor-pointer"
                />
              )}
            </div>

            <h4 className="text-lg font-semibold text-[#293649]">
              {leader.name}
            </h4>
            
            <p className="text-sm text-[#26b5c6] font-medium mb-3">
              {leader.role}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default CompanyLeadership