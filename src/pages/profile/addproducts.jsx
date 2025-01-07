import { useState } from 'react'
import ProductForm from '../../components/Admin/Form/ProductForm'

export default function AddProduct() {
  const [activeSection, setActiveSection] = useState('basic')

  const sections = [
    { id: 'basic', title: 'Basic Information' },
    { id: 'price', title: 'Pricing' },
    { id: 'details', title: 'Product Details' },
    { id: 'usage', title: 'Usage Information' },
    { id: 'manufacturer', title: 'Manufacturer Details' },
    { id: 'batch', title: 'Batch Information' },
    { id: 'related', title: 'Related Products' },
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Add Product</h1>
      <div className="flex">
        <div className="w-1/4 pr-4">
          <ul>
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  className={`w-full text-left py-2 px-4 rounded ${
                    activeSection === section.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4">
          <ProductForm activeSection={activeSection} />
        </div>
      </div>
    </div>
  )
}

