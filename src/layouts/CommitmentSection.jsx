"use client"

import { useRef, useState, useEffect } from "react"
import { useScroll, useTransform, motion } from "framer-motion"
// You may already have these icons, if not: npm install lucide-react
import { BadgeCheck, FlaskConical, HeartHandshake } from "lucide-react"

export const CommitmentSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const scaleDimensions = () => (isMobile ? [0.8, 0.9] : [1.05, 1])

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div
      className="py-10 md:py-20 flex flex-col items-center justify-center relative overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full filter blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <Header translate={translate} />
      <Card rotate={rotate} scale={scale} />
    </div>
  )
}

const Header = ({ translate }) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="text-center z-10 mb-12"
    >
      <div className="inline-block px-4 py-1 mb-3 text-sm font-medium text-[#26b5c6] bg-teal-50 border border-teal-100 rounded-full">
        Our Core Principles
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#293649]">
        Commitment to <span className="text-[#26b5c6]">Better Health</span>
      </h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        We are dedicated to enhancing community health by providing access to high-quality, affordable, and innovative medicines.
      </p>
    </motion.div>
  )
}

const Card = ({ rotate, scale }) => {
  const commitments = [
    {
      icon: <BadgeCheck className="w-6 h-6" />,
      title: "Uncompromising Quality Assurance",
      description: "Our facilities adhere to strict WHO-GMP standards, ensuring every product is safe, pure, and effective.",
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Innovative Research & Development",
      description: "We invest in R&D to develop new formulations that meet the evolving needs of patients and healthcare providers.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Customer-Centric Approach",
      description: "Your health is our priority. We are committed to ethical practices and building lasting trust with our community.",
    },
  ]

  return (
    <motion.div
      style={{ rotateX: rotate, scale }}
      className="w-full max-w-5xl -mt-12 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100"
    >
      <div className="md:flex h-full">
        {/* Left Side: Our Commitments */}
        <div className="md:w-1/2 p-6 md:p-8">
          <h3 className="text-xl font-semibold text-[#293649] mb-6">Our Promise</h3>
          <div className="space-y-6">
            {commitments.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-50 text-[#1d95a3] flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Visual Element */}
        <div className="md:w-1/2 bg-gray-100 p-4 min-h-[300px] md:min-h-0">
           {/* **IMPORTANT**: Replace this div with a real, high-quality image.
            Suggestions: A clean laboratory, a modern manufacturing line, or a picture of your research team.
            This visual is key to reinforcing the message of quality and professionalism.
           */}
           <div 
             className="w-full h-full bg-cover bg-center rounded-lg"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581093458791-9a6680c18ef3?q=80&w=2070...')" }} // Example image URL
           >
             {/* This div serves as the image container */}
           </div>
        </div>
      </div>
    </motion.div>
  )
}