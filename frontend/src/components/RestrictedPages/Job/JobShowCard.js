import React, { useState } from "react";
import { GoBriefcase } from "react-icons/go";
import { MdCurrencyRupee } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TbFileDescription } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import ReactHtmlParser from "html-react-parser";
import Modal from "./Form/Modal";
import CardContainer from "./Form/Card";
import { Card, CardBody, Typography } from "@material-tailwind/react";
const JobShowCard = (props) => {
  const {
    companyName,
    jobTitle,
    experienceRange,
    salaryRange,
    jobLocation,
    skills,
    jobDescription,
    isopenModelForJobDetailedDescription,
    setIsopenModelForJobDetailedDescription,
    jobDetails,
    setJobDetails,
    onClick,
  } = props;
  
  const toggleModal = () => {
    setJobDetails({
      companyName,
      jobTitle,
      experienceRange,
      salaryRange,
      jobLocation,
      skills,
      jobDescription,
    });
    setIsopenModelForJobDetailedDescription(
      !isopenModelForJobDetailedDescription
    );
  };
  return (
    <div
      onClick={toggleModal}
      className="block p-6 w-full cursor-pointer bg-white border  border-gray-200 mb-3 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <Modal
        size={"xxl"}
        setIsModalOpen={setIsopenModelForJobDetailedDescription}
        isModalOpen={isopenModelForJobDetailedDescription}
        hedaline="Apply for JOB"
      >
        <Card className="mt-6 w-full ">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {jobDetails?.companyName}
            </Typography>
            <Typography>
              <div className="flex items-center">
                <div className="text-lg font-bold">Designation:</div>
                <div>{jobDetails?.jobTitle}</div>
              </div>
              <div className="flex items-center">
                <div className="text-lg font-bold">Job Location:</div>
                <div>{jobDetails?.jobLocation}</div>
              </div>
              <div className="flex items-center">
                <div className="text-lg font-bold">Experience:</div>
                <div>{jobDetails?.experienceRange}Years</div>
              </div>
              <div className="flex items-center">
                <div className="text-lg font-bold">Expected Salary:</div>
                <div>{salaryRange}LPA</div>
              </div>
              <CardContainer>
                <div className="flex space-x-1 flex-wrap space-y-1 items-center ">
                  {jobDetails !== null &&
                    jobDetails?.skills.map((item) => (
                      <div
                        key={item}
                        className="px-6 h-10  rounded-full bg-blue-500 w-fit flex items-center   text-white font-semibold "
                      >
                        {item}
                      </div>
                    ))}
                </div>
              </CardContainer>
              <div className="mt-4">
                {jobDetails&&ReactHtmlParser(jobDetails?.jobDescription)}
              </div>
              <div className="flex justify-center  ">
                <button className="bg-green-700 px-10 text-white font-bold h-10">
                  Apply For Job
                </button>
              </div>
            </Typography>
          </CardBody>
        </Card>
      </Modal>

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
