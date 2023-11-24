import React from "react";

const Input = (props) => {
  const { label, type, name, onChange, value,onFocus } = props;

  return (
    <div>
      <label className="text-gray-600 ">{label}</label>
      <div
        className="flex items-center justify-center 
    border mt-1 w-full h-8 border-gray-600 text-gray-600 text-md rounded-md pl-2 hover:border-2 "
      >
        <input
          className=" w-full h-6 outline-none   text-md text-gray-700"
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          onFocus={onFocus}
        />
      </div>
    </div>
  );
};

export default Input;
