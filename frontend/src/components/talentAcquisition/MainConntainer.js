import React from "react";

const MainConntainer = (props) => {
  const { bgColor } = props;
  let mainContainerCss = {
    backgroundColor: bgColor,
  };
  return (
    <div style={mainContainerCss} className="w-screen min-h-screen">
      {props.children}
    </div>
  );
};

export default MainConntainer;
