import React, { useEffect, useRef, useState } from "react";
import MainConntainer from "../../talentAcquisition/MainConntainer";
import CardContainer from "../../talentAcquisition/CardContainer";
import Input from "../../UserOnboarding/utilities/style/Input";
import { IoInformationCircleSharp } from "react-icons/io5";
import Select from "../../UserOnboarding/utilities/style/Select";
import ButtonStyle from "../../utilities/styles/Button";
import Slider from "rc-slider";
import { City } from "country-state-city";
import {useNavigate} from 'react-router-dom'
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import useInput from "../../hooks/useInput";
const allCityFromIndia = City.getCitiesOfCountry("IN");

const JobInformation = () => {
  const navigate=useNavigate()
  const [salaryRange, setSalaryRange] = useState({
    minSalary: 0,
    maxSalary: 100,
  });
  const [experienceRange, setxperienceRange] = useState({
    minExprience: 0,
    maxExprience: 20,
  });

  const { userInput, onChange, setUserInput } = useInput({
    jobTitle: "",
    companyName: "",
    jobLocation: "",
  });
  const [isShowSuggestion, setIsShowSuggestion] = useState(false);
  console.log("userInput", userInput);
  const handleSliderChangeForSalary = (values) => {
    setSalaryRange({ minSalary: values[0], maxSalary: values[1] });
  };
  const handleSliderChangeForExprience = (values) => {
    setxperienceRange({ minExprience: values[0], maxExprience: values[1] });
  };
  const [city, setCity] = useState(allCityFromIndia);

  useEffect(() => {
    const updatedData = allCityFromIndia.filter((item) => {
      return item.name
        .toLocaleLowerCase()
        .includes(userInput.jobLocation.toLocaleLowerCase());
    });

    setCity(updatedData);
  }, [userInput.jobLocation]);

  const selectFromOption = (item) => {
    setUserInput({ ...userInput, jobLocation: item.name });
    setIsShowSuggestion(false);
  };

  const [cursorOnIndex, setCursorOnIndex] = useState(0);
  const keyPress = (e) => {
    if (e.key === "ArrowDown" && cursorOnIndex < city.length - 1) {
      setCursorOnIndex(cursorOnIndex + 1);
    } else if (e.key === "ArrowUp" && cursorOnIndex > 0) {
      setCursorOnIndex(cursorOnIndex - 1);
    } else if (e.key === "Enter") {
      setUserInput({
        ...userInput,
        jobLocation: city[cursorOnIndex]?.name,
      });
      setIsShowSuggestion(false);
    }
  };
  const handleSignUpToAccount=()=>{
    navigate('/user/home/jobposting/form/description')
  }
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

            <Input label="Job title" name="jobTitle" onChange={onChange} />
            <Input label="Company" name="companyName" onChange={onChange} />

            <div className="w-full  relative">
              <Input
                label="Job Location"
                name="jobLocation"
                onChange={onChange}
                value={userInput.jobLocation}
                onKeyDown={keyPress}
                onFocus={() => {
                  setIsShowSuggestion(true);
                }}
              />

              {isShowSuggestion && (
                <div className=" w-full border border-gray-700 max-h-32    absolute z-30 rounded-lg px-2 bg-[#F9FAFB] overflow-y-scroll">
                  {/* {city.map((item, index) => (
                  <SearchItemRenderer
                    city={item.name}
                    onClick={() => {
                      selectFromOption(item);
                    }}
                    index={index}
                    activeIndex={activeIndex}
                  />
                ))} */}

                  {city?.map((item, index) => {
                    return (
                      <div
                        key={item.isoCode}
                        onClick={(e) => {
                          selectFromOption(item);
                        }}
                        className={`pl-2 hover:bg-gray-300  cursor-pointer ${
                          index === cursorOnIndex && "bg-gray-200"
                        } `}
                      >
                        {item.name} <hr />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <Select
              label="Workplace type"
              name="WorkplaceType"
              optionInSelect={["On-Site", "Hybrid", "Remote"]}
            />

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
              defaultValue={[
                experienceRange.minExprience,
                experienceRange.maxExprience,
              ]}
              onChange={handleSliderChangeForExprience}
              className="text-blue-700 mx-2"
            />
            <p className="text-center text-gray-700">
              {experienceRange.minExprience}LPA -{experienceRange.maxExprience}
              Yrs
            </p>
            <ButtonStyle
              bgColor={"#0A66C2"}
              height={"7vh"}
              textColour={"white"}
                onClick={handleSignUpToAccount}
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
