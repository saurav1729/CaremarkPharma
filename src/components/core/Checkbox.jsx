import React from 'react';

const Checkbox = ({ label, name, checked, onChange, className = '', ...props }) => (
  <div className="mb-2">
    <label className="flex items-center">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className={`mr-2 ${className}`}
        {...props}
      />
      <span className="text-sm font-bold">{label}</span>
    </label>
  </div>
);

export default Checkbox;

