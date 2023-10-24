import React from "react";

const Button = (props) => {
  return (
    <button className="bg-[#0A66C2] font-medium rounded-full w-[30vw] h-12 mt-4 text-white">
    {props.children}
    </button>
  );
};

export default Button;
