import React from "react"
import Input from "../../../core/Input"
import TextArea from "../../../core/TextArea"
import RelatedProductsUpload from "../RelatedProductsUpload"

const ManufacturerAndBatch = ({ product, handleChange, errors }) => (
  <div>
    <h2 className="text-xl font-bold mb-2">Manufacturer & Batch Information</h2>

    {/* Manufacturer Name */}
    <Input
      label="Manufacturer Name"
      id="manufacturer_name"
      name="name"
      value={product.manufacturer_details.name}
      onChange={(e) => handleChange(e, "manufacturer_details")}
      error={errors["manufacturer_details.name"]}
      className="bg-gray-50 focus:bg-white transition-colors"
    />

    {/* Manufacturer Address */}
    <TextArea
      label="Manufacturer Address"
      id="manufacturer_address"
      name="address"
      value={product.manufacturer_details.address}
      onChange={(e) => handleChange(e, "manufacturer_details")}
      rows="2"
      className="bg-gray-50 focus:bg-white transition-colors"
    />

    {/* Manufacturer License */}
    <Input
      label="Manufacturer License"
      id="manufacturer_license"
      name="license"
      value={product.manufacturer_details.license}
      onChange={(e) => handleChange(e, "manufacturer_details")}
      className="bg-gray-50 focus:bg-white transition-colors"
    />

    {/* Related Products */}
    <RelatedProductsUpload
      relatedProducts={product.related_products || []}
      onRelatedProductsChange={(newRelatedProducts) =>
        handleChange({ target: { name: "related_products", value: newRelatedProducts } })
      }
    />

    {/* Manufacturing Date */}
    <Input
      label="Manufacturing Date"
      id="manufacturing_date"
      name="manufacturing_date"
      type="date"
      value={product.batch_info.manufacturing_date}
      onChange={(e) => handleChange(e, "batch_info")}
      className="bg-gray-50 focus:bg-white transition-colors"
    />

    {/* Expiry Date */}
    <Input
      label="Expiry Date"
      id="expiry_date"
      name="expiry_date"
      type="date"
      value={product.batch_info.expiry_date}
      onChange={(e) => handleChange(e, "batch_info")}
      error={errors["batch_info.expiry_date"]}
      className="bg-gray-50 focus:bg-white transition-colors"
    />
  </div>
)

export default ManufacturerAndBatch

