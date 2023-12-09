import React from "react";
import CardContainer from "./Card";
import { useSelector } from "react-redux";

const JobAddedSummeryCard = () => {
  const jobInfo = useSelector((store) => store.jobPostInfo);
  return (
    <div>
      {" "}
      <CardContainer>
        {" "}
        <div className=" flex lg:justify-between pr-20 justify-center space-x-12 lg:space-x-0">
          <img
            className="h-24"
            src="https://img.icons8.com/color/48/company.png"
            alt="company"
          />
          <div>
            <p className="font-semibold">{jobInfo?.jobTitle}</p>
            <p className="text-base ">{jobInfo?.companyName}</p>
            <p className="font-light"> {jobInfo?.jobLocation}</p>
            <p className="font-light"> ({jobInfo?.WorkType})</p>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};



export default JobAddedSummeryCard;
