import React from "react";
import Navbar from "./Navbar";
import {
  userDetailsWelcomeText,
  userDetailsLocationText,
  userDrtailsSmallText,
} from "../constant/constant";

const UserDetailsContainer = (props) => {
  return (
    <div>
      <Navbar />

      <div className="flex-col  w-full items-center justify-center min-h-screen ">
        <div className="text-center  font ">
          <div className="text-2xl font-semibold">
            <span>{userDetailsWelcomeText}</span>
            <span>{localStorage.getItem("jobshooterName") || "User"}!</span>
            <span>{userDetailsLocationText}</span>
          </div>
          <div className="mt-3 font-normal text-gray-500">
            {userDrtailsSmallText}
          </div>
        </div>

        <div className=" w-70vw md:w-[60vw] md:mx-auto mx-4 lg:w-[35vw]   p-6  ">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default UserDetailsContainer;
