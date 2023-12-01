import React, { useState } from "react";
import Input from "../../UserOnboarding/utilities/style/Input";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import JobSearchContainerOptionsRenderer from "./utiites/JobSearchContainerOptionsRenderer";
import jobSearchContainerOptions from "./utiites/JobSearchContainerOptions";
import jobTitleList from "./utiites/jobTitleList";

const JobSearchContainer = (props) => {
  const [searchResult, setSearchResult] = useState("");

  const [salaryRange, setSalaryRange] = useState({
    minSalary: 0,
    maxSalary: 100,
  });

  const handleSliderChange = (values) => {
    setSalaryRange({ minSalary: values[0], maxSalary: values[1] });
  };

  return (
    <div className="flex w-full min-h-screen px-28 bg-[#F4F2EE] shadow-md">
      <div className="w-3/12 border  sticky h-full top-24 mr-5 rounded-md ">
        <div class="max-w-sm bg-white border px-5 pt-9  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {jobSearchContainerOptions.map((item) => (
            <JobSearchContainerOptionsRenderer
              name={item.name}
              Logo={item.logo}
            />
          ))}
        </div>
      </div>
      <div className="w-6/12 border  mt-24 rounded-md bg-white px-3 pt-3">
        {props.children}
      </div>
      <div className="w-3/12 border   mt-24 rounded-md ml-4 bg-white px-5 pt-9">
        <h4 className="w-full text-center font-semibold text-lg">
          Add Preference
        </h4>
        {/* <Input type="text" label="Job Role " /> */}

        <div className="mt-2 w-full ">
          <div className="relative">
            <div className="z-1">
              <label className="text-base font-semibold">Job Title</label>
              <input
                type="text"
                className="border-2 rounded-md w-full p-1 border-gray-600 h-10 mt-2 focus:border-blue-600"
                // onChange={(e)=>{setSearchResult(e.target.value)}}
              />
            </div>
            {/* <div className="h-32 w-full border z-10 absolute bg-[#ffffff] rounded-md overflow-y-scroll">
              <ul className="text-base  font-medium  w-full cursor-pointer">
                {jobTitleList.map((jobTitle) => (
                  <li className="hover:bg-[#F4F5F7] px-2 mt-1 h-7 line-clamp-4">
                    {jobTitle}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
          <div className="mt-2">
            <label className="text-center font-semibold ">Salary Range</label>
            <div className="w-10/12 mt-2 w-full px-2">
              <Slider
                dotStyle={{ backgroundColor: "red" }}
                min={0}
                max={100}
                step={1}
                range
                defaultValue={[salaryRange.minSalary, salaryRange.maxSalary]}
                onChange={handleSliderChange}
                className="text-blue-700"
              />
              <p className="text-center">
                {salaryRange.minSalary}LPA -{salaryRange.maxSalary}LPA
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="z-1">
              <label className="text-base font-semibold">Location</label>
              <input
                type="text"
                className="border-2 rounded-md w-full p-1 border-gray-600 h-10 mt-2 focus:border-blue-600"
                // onChange={(e)=>{setSearchResult(e.target.value)}}
              />
            </div>
            {/* <div className="h-32 w-full border z-10 absolute bg-[#ffffff] rounded-md overflow-y-scroll">
              <ul className="text-base  font-medium  w-full cursor-pointer">
                {jobTitleList.map((jobTitle) => (
                  <li className="hover:bg-[#F4F5F7] px-2 mt-1 h-7 line-clamp-4">
                    {jobTitle}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
          
          <div className="relative mt-2">
            <div className="z-1">
              <label className="text-base font-semibold">Skills(Max 5 skills)</label>
              <input
                type="text"
                className="border-2 rounded-md w-full p-1 border-gray-600 h-10 mt-2 focus:border-blue-600"
                // onChange={(e)=>{setSearchResult(e.target.value)}}
              />
            </div>
            {/* <div className="h-32 w-full border z-10 absolute bg-[#ffffff] rounded-md overflow-y-scroll">
              <ul className="text-base  font-medium  w-full cursor-pointer">
                {jobTitleList.map((jobTitle) => (
                  <li className="hover:bg-[#F4F5F7] px-2 mt-1 h-7 line-clamp-4">
                    {jobTitle}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
          <button
            type="button"
            className="text-white mx-auto bg-[#3082FF] mt-2 w-full hover:bg-blue-800 focus:ring-4 font-bold focus:ring-blue-300  rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Filter Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSearchContainer;
