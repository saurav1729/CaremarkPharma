"use client"

import { useState, useEffect } from "react"
import Hero from "./../components/Hero"
import ProductContainer from "../components/ProductContainer"
import ContactUs from "../components/ContactUs"
import { ContainerScroll } from "../layouts/ContainerScroll"
import { CommitmentSection } from "../layouts/CommitmentSection"
import { api } from "../service"
import { useLocation } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import ProductData from "../utils/productData.json"

const Home = () => {
  const [frontendProducts, setFrontendProducts] = useState(ProductData.products)
  const [backendProducts, setBackendProducts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await api.get("/api/product/getAllProducts")
        if (response.data && response.data.success) {
          setBackendProducts(response.data.data)
        }
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const displayProducts = backendProducts || frontendProducts
  const filteredProducts = displayProducts?.slice(0, 6) ?? [] // Filter first 6 products

  return (
    <>
      <Helmet>
        <title>Caremark Pharmaceutical - Quality Healthcare Solutions</title>
        <meta
          name="description"
          content="Caremark Pharmaceutical Private Limited, established in 2021, is a manufacturer of chemical products based in Haridwar, Uttarakhand, India."
        />
        <link rel="canonical" href={`https://www.caremarkpharmaceutical.com${location.pathname}`} />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Hero />

        <main className="flex-grow">
          <section className="py-4">
            <ProductContainer cardData={filteredProducts} page="home" />
          </section>

          <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-2">
            <ContactUs isHomePage={true} />
          </section>

          <section>
            <ContainerScroll />
          </section>
        </main>
      </div>
    </>
  )
}

export default Home
