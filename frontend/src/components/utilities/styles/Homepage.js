import React from "react";
import Navbar from "../../Navbar/Homepage/Navbar";
import MiddleContainer from "../../HomePage/MiddleContainer";
import { HOMEPAGE_IMAGE_URL } from "../constant/Home/homePageConstant";
import PostingJobContainer from "../../HomePage/PostingJobContainer";
import Footer from "../../HomePage/Footer";

const Homepage = () => {
  return (
    <>
      <div className=" ml-[4vw] md:ml-[7vw]  mr-3 md:mr-0 ">
        <Navbar />
        <div className="flex ">
          <div className="w-full md:w-1/2 mt-[15px] md:mt-[45px] ">
            <MiddleContainer />
          </div>

          <div className="w-1/2  mt-24  hidden md:block overflow-x-hidden  ">
            <img
              src={HOMEPAGE_IMAGE_URL}
              alt="home page"
              className=" md:ml-[15vw] lg:ml-[5vw] "
            />
          </div>
        </div>
      </div>

     <PostingJobContainer/>
     <Footer/>

    </>
  );
};

export default Homepage;
