import React from "react";

const CardContainer = (props) => {
  return (
    <div>
      {/* <Navbar/> */}

      <div className="flex-col  w-full items-center justify-center  ">
        <div className=" w-70vw md:w-[60vw] md:mx-auto mx-4 lg:w-[30vw]  p-6 bg-white border border-gray-200 rounded-sm shadow ">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
