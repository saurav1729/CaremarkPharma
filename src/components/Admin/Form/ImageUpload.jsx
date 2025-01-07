import React from "react";

const ImageUpload = ({ images, onImageChange }) => {
  const handleUrlChange = (e, index) => {
    const newImages = [...images];
    newImages[index] = { ...newImages[index], url: e.target.value, file: null };
    onImageChange(newImages);
  };

  const handleFileUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = { ...newImages[index], url: URL.createObjectURL(file), file };
      onImageChange(newImages);
    }
  };

  const addUploadField = () => {
    onImageChange([...images, { url: "", file: null }]);
  };

  const removeUploadField = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    onImageChange(newImages);
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-2">Product Images</label>
      <div className="flex flex-col gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Enter image URL"
              value={image.url || ""}
              onChange={(e) => handleUrlChange(e, index)}
              className="w-5/6 px-3 py-2 border rounded-md bg-gray-50 focus:bg-white transition-colors"
            />
            <label
              htmlFor={`file-upload-${index}`}
              className="w-16 h-16 flex items-center justify-center border border-dashed rounded cursor-pointer text-gray-500 hover:bg-gray-100 transition-colors"
            >
              {image.file || image.url ? (
                <img
                  src={image.url || URL.createObjectURL(image.file)}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                "Upload"
              )}
              <input
                id={`file-upload-${index}`}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileUpload(e, index)}
              />
            </label>
            <button
              type="button"
              onClick={() => removeUploadField(index)}
              className="text-red-500 hover:text-red-700 text-sm focus:outline-none"
            >
              ×
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addUploadField}
          className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm"
        >
          Add Image
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;
