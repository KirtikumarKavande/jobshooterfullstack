import React from "react";

const Input = (props) => {
  const { label, type, name, onChange, value } = props;

  return (
    <div>
      <label>{label}</label>
      <div
        className="flex items-center justify-center 
    border mt-1 w-full h-8 border-black text-black text-md rounded-md pl-2 hover:border-2 "
      >
        <input
          className=" w-full h-6 outline-none   text-md"
          type={type}
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default Input;
