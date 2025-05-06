"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
// import logoImg from "../../resources"

import logoImg from "../../resources/CaremarkPharmaceuticalNewLogo.png"
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, ArrowRight, ExternalLink } from "lucide-react"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribeMessage, setSubscribeMessage] = useState("")

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setSubscribeMessage("Thank you for subscribing!")
      setEmail("")
      setIsSubmitting(false)
      // Clear message after 3 seconds
      setTimeout(() => setSubscribeMessage(""), 3000)
    }, 1000)
  }

  return (
    <>
      {/* Newsletter Section - Now separate from footer */}
      <section className="relative pb-7 overflow-hidden  bg-gradient-to-r from-blue-50 via-sky-50 to-teal-50">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#26b5c6]/10 to-[#293649]/10 z-0"></div> */}
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="bg-gradient-to-r from-[#293649] to-[#1e2a3d] rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative p-8 md:p-12">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#26b5c6]/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#26b5c6]/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                <div className="text-center md:text-left">
                  <div className="inline-block px-4 py-1 mb-3 text-sm font-medium text-white bg-[#26b5c6]/20 border border-[#26b5c6]/30 rounded-full">
                    Newsletter
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Stay Connected <span className="text-[#26b5c6]">With Us</span>
                  </h3>
                  <p className="mt-2 text-gray-300 max-w-md">
                    Subscribe to receive updates about new medicines and exclusive offers from Caremark Pharmaceutical.
                  </p>
                </div>

                <form onSubmit={handleSubscribe} className="w-full md:w-auto">
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        className="pl-10 pr-4 py-3.5 w-full md:w-80 rounded-lg border border-gray-700 bg-gray-800/50 text-white placeholder-gray-400 focus:border-[#26b5c6] focus:ring-1 focus:ring-[#26b5c6] outline-none"
                        type="email"
                        placeholder="Your Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <motion.button
                      className="px-6 py-3.5 bg-[#26b5c6] hover:bg-[#1d95a3] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70"
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </div>
                  {subscribeMessage && (
                    <motion.div
                      className="mt-3 text-center md:text-left text-green-400 font-medium"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      {subscribeMessage}
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer - Now with distinct background */}
      <footer className="bg-[#293649] relative overflow-hidden text-white pt-16 pb-8">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#26b5c6]/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#26b5c6]/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Logo and About */}
            <motion.div
              className="md:col-span-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center md:items-start">
                <div className="mt-4  bg-[#26b5c6]/10 rounded-2xl   backdrop:blur-[20px] p-4  mb-4">
                  <img
                    className="h-28  w-full object-contain"
                    src={logoImg || "/placeholder.svg"}
                    alt="Caremark Pharmaceutical Logo"
                  />
                </div>
                <p className="text-gray-300 text-center md:text-left mb-4">
                  Caremark Pharmaceutical Private Limited, established in 2021, is a manufacturer of high-quality
                  pharmaceutical products based in Haridwar, Uttarakhand, India.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#26b5c6]/20 flex items-center justify-center text-[#26b5c6] hover:bg-[#26b5c6] hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#26b5c6]/20 flex items-center justify-center text-[#26b5c6] hover:bg-[#26b5c6] hover:text-white transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={18} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#26b5c6]/20 flex items-center justify-center text-[#26b5c6] hover:bg-[#26b5c6] hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="md:col-span-2 "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 relative">
                Quick Links
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#26b5c6]"></span>
              </h4>
              <ul className="space-y-3">
                <FooterLink href="/contact">Contact Us</FooterLink>
                <FooterLink href="/location">Locate Our Store</FooterLink>
                <FooterLink href="/medicines">Products</FooterLink>
                <FooterLink href="/about">About Us</FooterLink>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="md:col-span-3 break-words" // removed overflow-hidden
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >

              <h4 className="text-lg font-semibold text-white mb-4 relative">
                Contact Us
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#26b5c6]"></span>
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-[#26b5c6] mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">+91 6204352229</p>
{/*                     <p className="text-gray-300">+91 6205573557 (WhatsApp)</p> */}
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-[#26b5c6] mt-0.5 mr-3 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-gray-300 break-words">caremark30@gmail.com</p>
                    <p className="text-gray-300 text-sm break-words">officialcaremarkpharmaceutical@gmail.com</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-[#26b5c6] mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-300">Haridwar City (Near Mantra Township), Haridwar - 249401</p>
                </li>
              </ul>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4 relative">
                Business Hours
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#26b5c6]"></span>
              </h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday:</span>
                  <span className="text-gray-200 font-medium">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Saturday:</span>
                  <span className="text-gray-200 font-medium">9:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Sunday:</span>
                  <span className="text-gray-200 font-medium">Closed</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-[#26b5c6]/10 rounded-lg border border-[#26b5c6]/20">
                <p className="text-sm text-gray-300">
                  <span className="font-medium text-[#26b5c6]">Note:</span> Hours may vary on holidays. Please call to
                  confirm.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-8"></div>

          {/* Copyright and Credits */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Caremark Pharmaceutical. All rights reserved.</p>
{/*             <p className="mt-2 md:mt-0">
              Developed with ❤️ by{" "}
              <a
                href="https://www.linkedin.com/in/saurav-jha-574171279/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#26b5c6] hover:underline font-medium inline-flex items-center"
              >
                Saurav Jha
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </p> */}
          </div>
        </div>
      </footer>
    </>
  )
}

const FooterLink = ({ href, children }) => (
  <li>
    <Link to={href} className="text-gray-300 hover:text-[#26b5c6] transition-colors flex items-center group">
      <span className="w-0 h-0.5 bg-[#26b5c6] mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
      {children}
    </Link>
  </li>
)

export default Footer
