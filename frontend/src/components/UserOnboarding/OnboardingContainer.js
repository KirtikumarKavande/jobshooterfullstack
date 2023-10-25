import React from "react";
import Navbar from "./Navbar";

const OnboardingContainer = (props) => {
  return (
    <div>
      <Navbar/>
    <div className="flex items-center justify-center min-h-screen ">
      <div className="   w-70vw md:w-[60vw]   lg:w-[30vw]  p-6 mx-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {props.children}
      </div>
    </div>
    </div>
  );
};

export default OnboardingContainer;
