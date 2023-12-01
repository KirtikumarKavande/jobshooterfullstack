import React from "react";

const JobSearchContainerOptionsRenderer = (props) => {
  const { name, Logo } = props;
  return (
    <div className="cursor-pointer">
      {" "}
      <div className="flex items-center space-x-2 pb-5">
        <span>{Logo}</span>
        <span className="font-medium">{name}</span>
      </div>
    </div>
  );
};

export default JobSearchContainerOptionsRenderer;
