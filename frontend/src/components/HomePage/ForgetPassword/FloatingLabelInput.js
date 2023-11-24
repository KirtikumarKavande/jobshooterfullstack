import React, { useState } from "react";

const FloatingLabelInput = (props) => {
    const {label,onChange,userInput,name}=props
    console.log("userInput",userInput)
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if(userInput.email.length<1)
    {
        setFocused(false);

    }
  };
  return (
    <div>
      <div className="relative">
        <label
          className={`absolute transition-all duration-300 ${
            focused ? "text-sm top-[1px] pl-2 pb-[5px]" : "text-lg pl-2 top-3 "
          } ${focused ? "text-black" : "text-gray-700"}`}
          htmlFor="inputField"
        >
          {label}
        </label>
        <input
          type="text"
          id="inputField"
          className="w-full px-3 py-4  border focus:pb-2 border-black rounded-md focus:outline-none focus:border-2 focus:border-blue-500"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          name={name}
        />
      </div>
    </div>
  );
};

export default FloatingLabelInput;
