import React, { useState, useEffect } from "react"
import { api } from "../../../service"

const RelatedProductsUpload = ({ relatedProducts = [], onRelatedProductsChange }) => {
  const [filteredList, setFilteredList] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilteredList, setShowFilteredList] = useState(false)

  useEffect(() => {
    fetchList()
  }, [])


  const fetchList = async () => {
    try {
      const response = await api.get(`/api/product/getAllProducts`)
      if (response.data && response.data.success) {
        setFilteredList(
          response.data.data.map((data) => ({
            label: data.name,
            value: data._id,
          })),
        )
      }
    } catch (error) {
      setFilteredList([])
      console.error("Error fetching products:", error)
    }
  }

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleProductSelect = (selectedProduct) => {
    if (
      !relatedProducts ||
      !Array.isArray(relatedProducts) ||
      !relatedProducts.some((product) => product.value === selectedProduct.value)
    ) {
      onRelatedProductsChange([...(relatedProducts || []), selectedProduct])
      const updatedProducts = filteredProducts.filter((product) => product.value !== selectedProduct.value); 
      setFilteredList(updatedProducts); 
    }
    setSearchTerm("")
  }

  const handleRemoveProduct = (productToRemove) => {
    const updatedProducts = (relatedProducts || []).filter((product) => product.value !== productToRemove.value)
    setFilteredList([...filteredList, productToRemove]);
    onRelatedProductsChange(updatedProducts)
  }

  const filteredProducts = filteredList.filter((product) =>
    product.label.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="mb-2">
      <label className="block text-sm font-bold mb-2">Related Products</label>
      <div className="flex flex-wrap gap-2 mb-2">
        {(relatedProducts || []).map((product) => (
          <div key={product.value} className="bg-blue-200 px-2  py-1  rounded-full flex items-center">
            <span>{product.label}</span>
            <button onClick={() => handleRemoveProduct(product)} className="ml-2  text-red-500 font-bold">
              ×
            </button>
          </div>
        ))}
      </div>
      <div className="relative">
        <input
          type="text"
          className="w-full p-2 border outline-none rounded bg-gray-50 focus:bg-white transition-colors"
          placeholder="Search for related products"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setShowFilteredList(true)}
          onBlur={() => setTimeout(() => setShowFilteredList(false), 200)}
        />
        {showFilteredList && filteredProducts.length > 0 && (
          <ul className="absolute z-10 w-full bg-gray-200 border rounded mt-1 max-h-40 overflow-y-auto scrollbar-none">
            {filteredProducts.map((product) => (
              <li
                key={product.value}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => handleProductSelect(product)}
              >
                {product.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default RelatedProductsUpload

