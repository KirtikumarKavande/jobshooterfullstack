import React from "react";
import Navbar from "../../Navbar/Homepage/Navbar";
import MiddleContainer from "../../Navbar/Homepage/MiddleContainer";
import { HOMEPAGE_IMAGE_URL } from "../constant/Home/homePageConstant";

const Homepage = () => {
  return (
    <div className="ml-[7vw]  min-h-screen ">
      <Navbar />
      <div className="flex ">
        <div className="w-1/2 mt-[45px]">
          <MiddleContainer />
        </div>

        <div className="w-1/2 mt-24  overflow-x-hidden">
          <img src={HOMEPAGE_IMAGE_URL} alt="home page" className="w-[100vw] ml-[5vw] " />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
