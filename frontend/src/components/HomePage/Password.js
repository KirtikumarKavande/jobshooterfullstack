import React, { useState } from "react";

const Password = (props) => {
  const { onChange, name } = props;
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mt-6">
      <label>Password</label>
      <div
        className="flex items-center  hover:border-2  
      border mt-1 w-full lg:w-[30vw] h-14 border-black text-gray-900 text-md rounded-md  p-2.5 dark:bg-gray-700  
      
      "
      >
        <input
          className=" w-[85vw]  lg:w-[25vw] h-10 outline-none pb-1 text-md"
          type={showPassword ? "text" : "password"}
          onChange={onChange}
          name={name}
        />

        <button
          className="text-blue-600 font-semibold text-md w-[15vw] lg:w-[5vw]"
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

export default Password;
