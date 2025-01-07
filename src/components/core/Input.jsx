import React from 'react';

const Input = ({ label, id, name, value, onChange,placeholder, error, type = 'text', className = '', ...props }) => (
  <div className="mb-2">
    <label className="block text-sm font-bold mb-1" htmlFor={id}>{label}</label>
    <input
      className={`w-full px-2 py-1 text-sm outline-none  border rounded ${error ? 'border-red-500' : ''} ${className}`}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      {...props}
    />
    {error && <p className="text-red-500 text-xs">{error}</p>}
  </div>
);

export default Input;

