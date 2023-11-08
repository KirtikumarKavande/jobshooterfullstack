const DisableButton = (props) => {
  const {
    bgColor,
    height,
    width,
    textColour,
    border,
    onClick,
    fontSize,
    isDisabled,
  } = props;
  const buttonStyle = {
    backgroundColor: isDisabled ? "#E8E8E8" : bgColor,
    height: height,
    color: textColour,
    fontSize: fontSize,
  };

  return (
    <button
      onClick={onClick}
      style={buttonStyle}
      className={` font-medium rounded-full   w-full lg:w-[${width}vw]  mt-4    border-${border}  ${
        isDisabled ? " cursor-not-allowed" : ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default DisableButton;
