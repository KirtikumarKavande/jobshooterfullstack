import React, { useEffect, useState } from "react";
import ProfileContainer from "./style/ProfileContainer";
import Input from "../../utilities/style/Input";
import { employmentType } from "../../utilities/constant/constant";
import Button from "../../../utilities/styles/Button";
import DisableButton from "../../../utilities/styles/DisableButton";
import useInput from "../../../hooks/useInput";
import StudentProfile from "./StudentProfile";
import usePostDataToDB from "../../../hooks/usePostDataToDB";
import { useNavigate } from "react-router-dom";
import preventGoingBack from "../../../utilities/Functions/preventGoingBack";

const Profile = () => {
  const { userInput, onChange } = useInput({
    jobTitle: "",
    employmentType: "",
    recentCompany: "",
  });
  const [isIamStudent, setIsIamStudent] = useState(false);
  const [isShowRestForm, setIsShowRestForm] = useState(false);
  const postToDB = usePostDataToDB();
   const navigate=useNavigate()

  let isDisabled = true;
  if (
    userInput.jobTitle.length > 0 &&
    userInput.employmentType.length > 0 &&
    userInput.recentCompany.length > 0
  ) {
    isDisabled = false;
  }

  useEffect(() => {
    if (userInput.jobTitle.length > 0) {
      setIsShowRestForm(true);
    }
  }, [userInput.jobTitle]);

  const handleProfile = async() => {

   const response= await postToDB("profile", {
      role: "professional",
      jobTitle: userInput.jobTitle,
      employmentType: userInput.employmentType,
      recentCompany: userInput.recentCompany,
    });
    if (response.success) {
      navigate('/user/home/jobs')
      preventGoingBack("/user/home/jobs")

    }
  };
  return (
    <ProfileContainer>
      {!isIamStudent && (
        <>
          <Input
            label={"Most recent job title"}
            onChange={onChange}
            name="jobTitle"
          />
          {isShowRestForm && (
            <>
              <div className=" my-2">
                <label className="text-gray-600">Employment type</label>
                <select
                  name="employmentType"
                  onChange={onChange}
                  id="countries"
                  class="flex items-center justify-center 
    border mt-1 w-full h-8 border-gray-600 text-gray-700 text-md rounded-md pl-2 hover:border-2"
                >
                  {employmentType.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
              <Input
                label={"Most recent company "}
                onChange={onChange}
                name="recentCompany"
              />
            </>
          )}

          <Button
            border="#FCFCFC"
            textColour="gray"
            hoverBackgroundColor="#E8E8E8"
            height="50px"
            bgColor={"#FCFCFC"}
            fontSize="20px"
            onClick={() => {
              setIsIamStudent(true);
            }}
          >
            I'm a Student
          </Button>
          <DisableButton
            onClick={handleProfile}
            bgColor={"#0A66C2"}
            height={"8vh"}
            textColour={"white"}
            fontSize="20px"
            isDisabled={isDisabled}
          >
            Continue
          </DisableButton>
        </>
      )}
      <></>
      {isIamStudent && <StudentProfile setIsIamStudent={setIsIamStudent} />}
    </ProfileContainer>
  );
};

export default Profile;
