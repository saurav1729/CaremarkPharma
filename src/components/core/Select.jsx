import React from 'react';

const Select = ({ label, id, name, value, onChange, options, error, className = '', ...props }) => (
  <div className="mb-2">
    <label className="block text-sm font-bold mb-1" htmlFor={id}>{label}</label>
    <select
      className={`w-full px-2 py-1 outline-none text-sm border rounded ${error ? 'border-red-500' : ''} ${className}`}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-xs">{error}</p>}
  </div>
);

export default Select;

