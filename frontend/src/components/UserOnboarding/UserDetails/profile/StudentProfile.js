import React, { useState } from "react";
import Input from "../../utilities/style/Input";
import Select from "../../utilities/style/Select";
import RangeCalculation from "../../utilities/Functions/RangeCalculation";
import {
  endYearOfCollege,
  months,
  startYearOfCollege,
} from "../../utilities/constant/constant";
import { PiToggleLeftFill, PiToggleRightFill } from "react-icons/pi";
import Button from "../../../utilities/styles/Button";
import DisableButton from "../../../utilities/styles/DisableButton";
import useInput from "../../../hooks/useInput";
import usePostDataToDB from "../../../hooks/usePostDataToDB";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const StudentProfile = (props) => {
  const { setIsIamStudent } = props;
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const [perfectAge, setPerfectAge] = useState(true);
  const { userInput, onChange } = useInput({
    clgName: "",
    startYear: "",
    endYear: "",
    day: "",
    month: "",
    year: "",
  });

  const postDataToDb = usePostDataToDB();

  let isDisabled = true;

  if (
    !perfectAge &&
    userInput.day.length > 0 &&
    userInput.month.length > 0 &&
    userInput.year.length > 0
  ) {
    isDisabled = false;
  } else {
    isDisabled = true;
  }

  if (
    perfectAge &&
    userInput.clgName.length > 0 &&
    userInput.startYear.length > 0 &&
    userInput.endYear.length > 0
  ) {
    isDisabled = false;
  }

  const handleStudentProfileData = async () => {
    let birthDate = `${userInput.day}/${userInput.month}/${userInput.year}`;
    if (userInput.endYear < userInput.startYear) {
      toast.error("College End Year Should be gretter than Start Year");
    } else {
      let profileInfo;
      if (!perfectAge) {
        profileInfo = await postDataToDb("profile", {
          role: "student",
          clgName: userInput.clgName,
          collegeStartYear: userInput.startYear,
          collegeEndYear: userInput.endYear,
          birthDate: birthDate,
        });
      } else {
        profileInfo = await postDataToDb("profile", {
          role: "student",
          clgName: userInput.clgName,
          collegeStartYear: userInput.startYear,
          collegeEndYear: userInput.endYear,
        });
      }
      if (profileInfo.success) {
        navigate('/user/home')
      }
    }
  };
  return (
    <div>
      <Input
        label="School or College/University "
        onChange={onChange}
        name="clgName"
      />
      <div className="w-full flex mt-4 space-x-3">
        <div className="w-1/2">
          <Select
            label="Start Year"
            name="startYear"
            optionInSelect={RangeCalculation(+currentYear, startYearOfCollege)}
            onChange={onChange}
          />
        </div>
        <div className="w-1/2">
          <Select
            label="End Year"
            name="endYear"
            optionInSelect={RangeCalculation(
              endYearOfCollege,
              startYearOfCollege
            )}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="w-full h-14 border rounded-md border-gray-500 mt-4 flex px-4 items-center justify-between">
        <div>I’m over 16</div>
        <div
          className="cursor-pointer"
          onClick={() => {
            setPerfectAge(!perfectAge);
          }}
        >
          {perfectAge ? (
            <div className="flex space-x-1 items-center">
              <span className="text-sm">Yes </span>{" "}
              <PiToggleRightFill className="text-green-800" size={35} />
            </div>
          ) : (
            <div className="flex space-x-1 items-center">
              <span className="text-sm">No </span>{" "}
              <PiToggleLeftFill size={35} className="text-gray-500" />
            </div>
          )}
        </div>
      </div>
      <div>
        {!perfectAge && (
          <>
            <div className="mt-3 text-gray-600">Date Of Birth</div>
            <div className="w-full flex space-x-4 ">
              <div className="w-1/3">
                <Select
                  optionInSelect={months}
                  onChange={onChange}
                  label="Month"
                  name="month"
                />
              </div>
              <div className="w-1/3">
                <Select
                  onChange={onChange}
                  optionInSelect={RangeCalculation(31, 1)}
                  label="Day"
                  name="day"
                />
              </div>
              <div className="w-1/3">
                <Select
                  onChange={onChange}
                  optionInSelect={RangeCalculation(
                    currentYear,
                    startYearOfCollege
                  )}
                  label="Year"
                  name="year"
                />
              </div>
            </div>
          </>
        )}
      </div>
      <Button
        border="#FCFCFC"
        textColour="gray"
        hoverBackgroundColor="#E8E8E8"
        height="50px"
        bgColor={"#FCFCFC"}
        fontSize="20px"
        onClick={() => {
          setIsIamStudent(false);
        }}
      >
        I'm not a Student
      </Button>
      <DisableButton
        onClick={handleStudentProfileData}
        bgColor={"#0A66C2"}
        height={"8vh"}
        textColour={"white"}
        fontSize="20px"
        isDisabled={isDisabled}
      >
        Continue
      </DisableButton>
    </div>
  );
};

export default StudentProfile;
