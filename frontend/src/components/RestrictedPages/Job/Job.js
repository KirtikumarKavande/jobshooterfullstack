import React, { useEffect, useState } from "react";
import JobSearchContainer from "./JobSearchContainer";
import { GoBriefcase } from "react-icons/go";
import { MdCurrencyRupee } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TbFileDescription } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import useGetDataFromDB from "../../hooks/useGetDataFromDB";
import JobShowCard from "./JobShowCard";

const Job = () => {
  const getDataFromDB = useGetDataFromDB();
  const [jobInformationData, setJobInformationData] = useState();

  useEffect(() => {
    getJobInformationDataFromDB();
  }, []);
  console.log(jobInformationData);

  const getJobInformationDataFromDB = async () => {
    const data = await getDataFromDB("jobInformation");
    setJobInformationData(data);
  };
  return (
    <>
      <JobSearchContainer>
        {jobInformationData?.data?.map((item) => (
          <JobShowCard
            companyName={item.companyName}
            jobTitle={item.jobTitle}
            experienceRange={item.experienceRange}
            salaryRange={item.salaryRange}
            jobLocation={item.jobLocation}
            skills={item.skills}
            jobDescription={item.jobDescription}
          />
        ))}
      </JobSearchContainer>
    </>
  );
};

export default Job;
