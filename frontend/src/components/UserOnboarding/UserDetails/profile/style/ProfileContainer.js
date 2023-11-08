import React from "react";
import Navbar from "../../../utilities/style/Navbar";
import { profielText } from "../../../utilities/constant/constant";

const ProfileContainer = (props) => {
  return (
    <div>
      <Navbar />

      <div className="flex-col  w-full items-center justify-center min-h-screen ">
        <div className="text-center  font ">
          <div className="text-2xl font-semibold">
            <span className="">{profielText}</span>
          </div>
        </div>

        <div className=" w-70vw md:w-[60vw] md:mx-auto mx-4 lg:w-[35vw]   p-6  ">
          {props.children}
        </div>

      </div>
    </div>
  );
};

export default ProfileContainer;
