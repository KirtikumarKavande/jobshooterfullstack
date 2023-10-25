import React, { useState } from "react";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mt-6">
      <label>Password(6+ characters)</label>
      <div
        className="flex items-center  hover:border-2  
      border mt-1  h-8 border-black text-black text-md rounded-md  p-2 dark:bg-gray-700  
      
      "
      >
        <input
          className=" w-10/12 h-4 outline-none  text-md"
          type={showPassword ? "text" : "password"}
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
