import React from "react";
import UserDetailsContainer from "../../utilities/style/UserDetailsContainer";
import ProfileContainer from "./style/ProfileContainer";
import Input from "../../utilities/style/Input";
import { employmentType } from "../../utilities/constant/constant";
import Button from "../../../utilities/styles/Button";
import DisableButton from "../../../utilities/styles/DisableButton";

let isDisabled=true

const Profile = () => {
  return (
    <ProfileContainer>
      <Input label={"Most recent job title"} />

      <div className=" my-2">
        <label>Select an option</label>
        <select
          id="countries"
          class="flex items-center justify-center 
    border mt-1 w-full h-8 border-black text-black text-md rounded-md pl-2 hover:border-2"
        >
          {employmentType.map((item) => (
            <option>{item}</option>
          ))}
        </select>
      </div>
      <Input label={"Most recent company "} />
      <Button
        border="#FCFCFC"
        textColour="gray"
        hoverBackgroundColor="#E8E8E8"
        height="50px"
        bgColor={"#FCFCFC"}
        fontSize="20px"
      >
        I'm a Student
      </Button>
      <DisableButton
        bgColor={"#0A66C2"}
        height={"8vh"}
        textColour={"white"}
        fontSize="20px"
        isDisabled={true}

      >
        Continue
      </DisableButton>

    </ProfileContainer>
  );
};

export default Profile;
