import React from "react";

const Button = (props) => {
  const { bgColor, height, width, textColour, border } = props;
  console.log("props", props);

  const buttonStyle = {
    backgroundColor: bgColor,
    height: height,
    color: textColour,
  };
  return (
    <button
      style={buttonStyle}
      className={` font-medium rounded-full w-full lg:w-[${width}vw]  mt-4   border border-${border}   hover:opacity-95 `}
    >
      {props.children}
    </button>
  );
};

export default Button;
