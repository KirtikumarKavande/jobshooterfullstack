import React from "react";
import Navbar from "./Navbar";

const SignUpContainer = (props) => {
  return (
    <div>
      <Navbar/>

    <div className="flex-col  w-full items-center justify-center min-h-screen ">
    <div className="text-center  text-4xl font mb-4">Make the most of your professional life </div>

      <div className=" w-70vw md:w-[60vw] md:mx-auto mx-4 lg:w-[30vw]  p-6 bg-white border border-gray-200 rounded-lg shadow ">
        {props.children}
      </div>
    </div>
    </div>
  );
};

export default SignUpContainer;
