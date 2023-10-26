import React from "react";

const Error = (props) => {
  return <p className="text-red-600 text-xs mt-1 ">{props.errorMessage}</p>;
};

export default Error;
