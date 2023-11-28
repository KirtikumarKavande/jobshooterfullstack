import React, { useState } from "react";

const Button = (props) => {
  const {
    bgColor,
    height,
    width,
    textColour,
    border,
    onClick,
    hoverBackgroundColor,
    fontSize,
  } = props;
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? hoverBackgroundColor || bgColor : bgColor,
    height: height,
    color: textColour,
    fontSize: fontSize,
    
  };

  return (
    <button
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={onClick}
      style={buttonStyle}
      className={` font-medium rounded-full   w-full lg:w-[${width}vw]  mt-4    border-${border}   hover:opacity-95  `}
    >
      {props.children}
    </button>
  );
};

export default Button;
