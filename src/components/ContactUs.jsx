"use client"

import { useContext, useState, useEffect } from "react"
import Rimage from "../assets/a157.png"
import AuthContext from "../../Context/AuthContext"
import { api } from "../service"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Send, User, Phone, Mail, MessageSquare } from "lucide-react"

const ContactUs = ({ isHomePage = false }) => {
  const authCtx = useContext(AuthContext)
  const [formData, setFormData] = useState({
    name: authCtx.user?.name || "",
    phoneNumber: "",
    email: authCtx.user?.email || "",
    message: "",
  })

  const navigate = useNavigate()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [messageType, setMessageType] = useState("") // 'success' or 'error'

   useEffect(() => {
    window.scrollTo(0, 0);
   })

  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      name: authCtx.user?.name || "",
      email: authCtx.user?.email || "",
    }))

  }, [authCtx.user])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      if (!authCtx.isLoggedIn) {
        navigate("/login")
        return
      }
      const response = await api.post("/api/contact", formData, {
        headers: {
          Authorization: `Bearer ${authCtx.token}`,
        },
      })
      setSubmitMessage(response.data.message)
      setMessageType("success")
      setFormData({ name: authCtx.user?.name || "", phoneNumber: "", email: authCtx.user?.email || "", message: "" })
    } catch (error) {
      setSubmitMessage(error.response?.data?.message || "An error occurred. Please try again.")
      setMessageType("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  return (
    <div className="py-2 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full filter blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-20 -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 mb-3 text-sm font-medium text-[#26b5c6] bg-teal-50 border border-teal-100 rounded-full">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#293649]">
            Contact <span className="text-[#26b5c6]">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#26b5c6] to-[#1d95a3] mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help you.
          </p>
        </motion.div>

        <motion.div
          className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row">
            <motion.div
              className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-2xl font-semibold text-[#293649] mb-6">Send us a Message</h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <motion.div variants={itemVariants}>
                  <InputField
                    icon={<User className="h-5 w-5 text-gray-400" />}
                    label="Name"
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={authCtx.isLoggedIn}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <InputField
                    icon={<Phone className="h-5 w-5 text-gray-400" />}
                    label="Phone Number"
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter Your Number (e.g., 9023920**)"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <InputField
                    icon={<Mail className="h-5 w-5 text-gray-400" />}
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter Email (e.g., abc@gmail.com)"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={authCtx.isLoggedIn}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <TextAreaField
                    icon={<MessageSquare className="h-5 w-5 text-gray-400" />}
                    label="Enter Message"
                    name="message"
                    placeholder="Enter Your Query or Message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <SubmitButton isSubmitting={isSubmitting} />

                  {submitMessage && (
                    <motion.div
                      className={`mt-4 p-3 rounded-lg text-sm ${
                        messageType === "success"
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {submitMessage}
                    </motion.div>
                  )}
                </motion.div>
              </form>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 bg-gradient-to-br from-[#e6f7fa] to-[#f0f7fa] flex items-center justify-center p-8 lg:p-10 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Decorative elements */}
              <div className="absolute top-10 right-10 w-16 h-16 bg-[#26b5c6]/10 rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-20 h-20 bg-[#26b5c6]/10 rounded-full"></div>

              <div className="relative z-10 text-center">
                <img
                  src={Rimage || "/placeholder.svg"}
                  alt="Contact illustration"
                  className="max-w-full h-[22rem] object-contain mx-auto"
                />

                <div className="mt-8 space-y-4">
                  <h3 className="text-xl font-semibold text-[#293649]">Contact Information</h3>

                  <div className="flex items-center justify-center gap-2 text-gray-700">
                    <Mail className="h-5 w-5 text-[#26b5c6]" />
                    <span>caremark30@gmail.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const InputField = ({ icon, label, type, name, placeholder, value, onChange, disabled }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="block w-full rounded-lg border border-gray-300 pl-10 px-3 py-2.5 text-gray-900 placeholder-gray-500 focus:border-[#26b5c6] focus:ring-[#26b5c6] focus:outline-none focus:ring-1 sm:text-sm disabled:bg-gray-100 transition-colors"
        required
      />
    </div>
  </div>
)

const TextAreaField = ({ icon, label, name, placeholder, value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="relative">
      <div className="absolute top-3 left-3 flex items-start pointer-events-none">{icon}</div>
      <textarea
        name={name}
        id={name}
        rows="4"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="block w-full rounded-lg border border-gray-300 pl-10 px-3 py-2.5 text-gray-900 placeholder-gray-500 focus:border-[#26b5c6] focus:ring-[#26b5c6] focus:outline-none focus:ring-1 sm:text-sm transition-colors"
        required
      ></textarea>
    </div>
  </div>
)

const SubmitButton = ({ isSubmitting }) => (
  <motion.button
    type="submit"
    disabled={isSubmitting}
    className="w-full flex justify-center items-center gap-2 py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#26b5c6] to-[#1d95a3] hover:from-[#1d95a3] hover:to-[#26b5c6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#26b5c6] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed h-11"
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
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        Submitting...
      </>
    ) : (
      <>
        Send Message
        <Send className="h-4 w-4 ml-1" />
      </>
    )}
  </motion.button>
)

export default ContactUs
