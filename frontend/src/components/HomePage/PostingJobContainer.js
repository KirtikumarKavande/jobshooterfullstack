import React from "react";

const PostingJobContainer = () => {
  return (
    <div>
      <div className="bg-[#F1ECE5] h-[40vh] mt-[10vh] flex md:flex-auto items-center ">
        <div className="text-4xl  pl-[7vw] text-[#B24020] md:w-[30vw]">
          Post your job for millions of people to see{" "}
        </div>
        <button className=" hover:bg-gray-100 text-blue-500 font-semibold border  border-blue-400   md:ml-[15vw]  mr-1 px-9 h-20 md:h-20 rounded-full ">
          Post Job
        </button>
      </div>
    </div>
  );
};

export default PostingJobContainer;
