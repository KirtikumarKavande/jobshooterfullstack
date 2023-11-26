import React from "react";
// import Navbar from "./Navbar";


const SignInContainer = (props) => {
  return (
    <div>
      {/* <Navbar /> */}

      <div className="flex-col  w-full items-center justify-center min-h-screen ">
        <div className="text-center  font ">
          <div className="text-2xl font-semibold">
           
          </div>
          <div className="mt-3 font-normal text-gray-500">
            {/* {userDrtailsSmallText} */}
          </div>
        </div>

        <div className=" w-70vw md:w-[60vw] md:mx-auto mx-4 lg:w-[35vw]   p-6  ">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default SignInContainer;
