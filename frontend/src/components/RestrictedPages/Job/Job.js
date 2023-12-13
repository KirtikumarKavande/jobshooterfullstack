import React, { useEffect, useState } from "react";
import JobSearchContainer from "./JobSearchContainer";
import useGetDataFromDB from "../../hooks/useGetDataFromDB";
import JobShowCard from "./JobShowCard";

const Job = () => {
  const getDataFromDB = useGetDataFromDB();
  const [jobInformationData, setJobInformationData] = useState();
  const [isopenModelForJobDetailedDescription, setIsopenModelForJobDetailedDescription] = useState(false);
  const [jobDetails,setJobDetails]=useState()

  useEffect(() => {
    getJobInformationDataFromDB();
  }, []);

  const getJobInformationDataFromDB = async () => {
    const data = await getDataFromDB("jobInformation");
    setJobInformationData(data);
  };

  return (
    <>
      <JobSearchContainer>
        {jobInformationData?.data?.map((item) => (
          <JobShowCard
            key={item._id} 
            companyName={item.companyName}
            jobTitle={item.jobTitle}
            experienceRange={item.experienceRange}
            salaryRange={item.salaryRange}
            jobLocation={item.jobLocation}
            skills={item.skills}
            jobDescription={item.jobDescription}
            setJobDetails={setJobDetails}
            jobDetails={jobDetails}
            isopenModelForJobDetailedDescription={isopenModelForJobDetailedDescription}
            setIsopenModelForJobDetailedDescription={setIsopenModelForJobDetailedDescription}
          />
        ))}
      </JobSearchContainer>
    </>
  );
};

export default Job;
