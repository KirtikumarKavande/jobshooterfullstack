import React, { useState } from "react";
import MainConntainer from "../../talentAcquisition/MainConntainer";
import CardContainer from "../../talentAcquisition/CardContainer";
import Input from "../../UserOnboarding/utilities/style/Input";
import { IoInformationCircleSharp } from "react-icons/io5";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import Select from "../../UserOnboarding/utilities/style/Select";

import ButtonStyle from "../../utilities/styles/Button";
import Slider from "rc-slider";

const JobInformation = () => {
  const [salaryRange, setSalaryRange] = useState({
    minSalary: 0,
    maxSalary: 100,
  });
  const [experienceRange, setxperienceRange] = useState({
    minExprience: 0,
    maxExprience: 20,
  });

  const handleSliderChangeForSalary = (values) => {
    setSalaryRange({ minSalary: values[0], maxSalary: values[1] });
  };
  const handleSliderChangeForExprience = (values) => {
    setxperienceRange({ minExprience: values[0], maxExprience: values[1] });
  };
  return (
    <div className="pt-16">
      <MainConntainer bgColor={"#38434F"}>
        <div className="pt-4">
          <CardContainer>
            <h2 className="text-2xl font-semibold">Post a job for free</h2>
            <h6>Increase the quality of your hire</h6>
            <span className="absolute left-[30vw] lg:left-[42vw] ">
              {" "}
              <Popover>
                <PopoverHandler>
                  <Button className="w-5 p-0 h-5 bg-white border-white ">
                    <IoInformationCircleSharp
                      size={20}
                      className="text-[#5E5E5E] cursor-pointer object-contain"
                    />
                  </Button>
                </PopoverHandler>
                <PopoverContent className="w-60 mt-40 ">
                  Make your job more discoverable to job seekers by selecting a
                  title from the dropdown. You can also choose your own title
                  instead
                </PopoverContent>
              </Popover>
            </span>

            <Input label="Job title" />
            <Input label="Company" />
            <Select
              label="Workplace type"
              name="WorkplaceType"
              optionInSelect={["On-Site", "Hybrid", "Remote"]}
            />
            <Input label="Job Location" />
            <Select
              label="Work type"
              name="WorkType"
              optionInSelect={[
                "Full-Time",
                "Part-Time",
                "Contract",
                "Temporary",
                "Volunteer",
                "Internship",
                "Other",
              ]}
            />
            <p className="text-gray-700 mt-2">Salary Range</p>
            <Slider
              min={0}
              max={100}
              step={1}
              range
              defaultValue={[salaryRange.minSalary, salaryRange.maxSalary]}
              onChange={handleSliderChangeForSalary}
              className="text-blue-700 mx-2"
            />
            <p className="text-center text-gray-700">
              {salaryRange.minSalary}LPA -{salaryRange.maxSalary}LPA
            </p>
            <p className="text-gray-700 mt-2">Years Of Exprience</p>

            <Slider
              min={0}
              max={20}
              step={1}
              range
              defaultValue={[experienceRange.minExprience, experienceRange.maxExprience]}
              onChange={handleSliderChangeForExprience}
              className="text-blue-700 mx-2"
            />
            <p className="text-center text-gray-700">
              {experienceRange.minExprience}LPA -{experienceRange.maxExprience}Yrs
            </p>
            <ButtonStyle
              bgColor={"#0A66C2"}
              height={"7vh"}
              textColour={"white"}
              //   onClick={handleSignUpToAccount}
            >
              Get Started For Free
            </ButtonStyle>
          </CardContainer>
        </div>
      </MainConntainer>
    </div>
  );
};

export default JobInformation;
