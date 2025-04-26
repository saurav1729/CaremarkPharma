"use client"

import { useState, useEffect } from "react"
import images from "../utils/image" // Ensure this imports correctly

function Carousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 5500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex h-[12rem] sm:h-[15rem] md:h-[18rem] lg:h-[20rem] w-[92%] max-w-7xl mx-auto overflow-hidden rounded-xl shadow-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full overflow-hidden transition-opacity duration-500 ease-in-out ${
            index === current ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            className="w-full h-full object-cover"
            src={image.image || "/placeholder.svg"}
            alt={image.title || "Carousel image"}
          />
        </div>
      ))}

      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              index === current ? "bg-[#26b5c6] w-5" : "bg-white/70 hover:bg-white"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
