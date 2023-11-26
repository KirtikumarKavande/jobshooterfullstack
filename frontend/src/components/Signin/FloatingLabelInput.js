import React, { useState } from "react";

const FloatingLabelPassword = ({ label, placeholder, type }) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full mt-2">
      <input
        className="w-full border  border-black focus:border-blue-700 focus:border-2 focus:outline-none pt-6 px-3 rounded-md"
        type={showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        autoComplete="off"
      />
     
      <label
        className={`absolute left-3 transition-all duration-300 ${
          value ? "text-blue-800 text-base top-1" : "text-black text-base top-4"
        }`}
      >
        {label}
      </label>
      {type === "password" && (
        <button
          type="button"
          className="absolute right-3 top-4"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
};

export default FloatingLabelPassword;
