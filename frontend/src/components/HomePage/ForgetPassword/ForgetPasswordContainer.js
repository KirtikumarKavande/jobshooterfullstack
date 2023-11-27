import React from "react";
import Navbar from "./Navbar";

const SignUpContainer = (props) => {
    const{pageTitle} = props
  return (
    <div>
      <Navbar />

      <div className="flex-col  w-full items-center justify-center ">
        <div className=" w-70vw md:w-[60vw] md:mx-auto mx-4 lg:w-[33vw]  p-6 bg-white border border-gray-200 rounded-lg shadow ">
          <p className="font-bold text-2xl mb-4">{pageTitle}</p>
          {props.children}
          
        </div>
      </div>
    </div>
  );
};

export default SignUpContainer;
