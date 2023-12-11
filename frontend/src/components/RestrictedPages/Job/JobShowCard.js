import React from "react";
import { GoBriefcase } from "react-icons/go";
import { MdCurrencyRupee } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TbFileDescription } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import ReactHtmlParser from "html-react-parser";

const JobShowCard = (props) => {
  const {
    companyName,
    jobTitle,
    experienceRange,
    salaryRange,
    jobLocation,
    skills,
    jobDescription,
  } = props;

  console.log("lets see", ReactHtmlParser(jobDescription));
  return (
    <div className="block p-6 w-full bg-white border border-gray-200 mb-3 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h3 className="font-semibold text-lg">{jobTitle}</h3>
      <h6 className="text-gray-600 font-semibold">{companyName}</h6>
      <div className="mt-4 flex space-x-6 items-center text-gray-600">
        <span className="flex items-center space-x-2">
          <GoBriefcase size={20} /> <span>{experienceRange} Yrs</span>{" "}
        </span>
        <span className="flex items-center">
          <MdCurrencyRupee size={20} />
          <span>{salaryRange} Lacks PA</span>{" "}
        </span>
        <span>|</span>
        <span className="flex items-center space-x-1">
          <IoLocationOutline size={20} /> <span>{jobLocation}</span>{" "}
        </span>
      </div>
      <div className="flex items-center text-gray-600 mt-2">
        <TbFileDescription size={25} />{" "}
        <div className="w-full whitespace-nowrap overflow-hidden text-ellipsis ">
          {ReactHtmlParser(jobDescription)[4]}
        </div>
      </div>
      <div>
        {" "}
        <div className="flex items-center text-gray-600 mt-2 space-x-1  whitespace-nowrap overflow-hidden text-ellipsis">
          {skills.map((item) => (
            <div className="flex items-center">
              <GoDotFill size={10} /> <span className="text-base">{item}</span>
            </div>
          ))}{" "}
        </div>
      </div>
    </div>
  );
};

export default JobShowCard;
