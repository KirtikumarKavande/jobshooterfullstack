import React, { useState } from "react";

const PasswordInput = (props) => {
  const {onChange,value}=props
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mt-6">
      <label className="text-gray-600">Password(6+ characters)</label>
      <div
        className="flex items-center  hover:border-2  
      border mt-1  h-8 border-black text-gray-600 text-md rounded-md  p-2 dark:bg-gray-700  
      
      "
      onChange={onChange}
      >
        <input
          className=" w-10/12 h-6 outline-none text-gray-700  text-md"
          name="password"
          type={showPassword ? "text" : "password"} value={value}

        />

        <button
          className="text-blue-600 font-semibold text-md   w-2/12 "
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
