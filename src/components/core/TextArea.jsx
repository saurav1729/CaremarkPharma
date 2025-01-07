import React from 'react';

const TextArea = ({ label, id, name, value, placeholder, onChange, error, rows = 3, className = '', ...props }) => (
  <div className="mb-2">
    <label className="block text-sm font-bold mb-1" htmlFor={id}>{label}</label>
    <textarea
      className={`w-full px-2 py-1 text-sm outline-none border rounded ${error ? 'border-red-500' : ''} ${className}`}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      {...props}
    />
    {error && <p className="text-red-500 text-xs">{error}</p>}
  </div>
);

export default TextArea;

