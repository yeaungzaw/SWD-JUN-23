import React from "react";

const FormComponents = ({ type, name, label, placeholder = "", ...rest }) => {
  return (
    <div className="flex flex-col">
      <label className="text-lg" htmlFor={name}>
        {label}
      </label>
      <input
        {...rest}
        className="px-2 py-3 border-2 border-blue-300 rounded mt-2"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormComponents;
