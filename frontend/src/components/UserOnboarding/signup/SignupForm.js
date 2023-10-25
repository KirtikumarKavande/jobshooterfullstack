import React, { useState } from "react";
import OnboardingContainer from "../OnboardingContainer";
import Input from "../utilities/style/Input";
import PasswordInput from "../utilities/style/PasswordInput";
import Button from "../../utilities/styles/Button";
import { useDispatch } from "react-redux";
import { showUserDetails } from "../../store/UserOnBoardSlice";
import PrivacyAndCookie from "../utilities/Functions/PrivacyAndCookie";


const SignupForm = (props) => {
const {setIsShowUserDetailsForm}=props
  const addUserDetails=()=>{
    setIsShowUserDetailsForm(false)
  }
 const dispatch= useDispatch()
  return (
    <>
      <OnboardingContainer>
        <Input label={"Email"} type={"email"} />
        <PasswordInput />
       <PrivacyAndCookie/>
        <Button bgColor={"#0A66C2"} height={"7vh"} textColour={"white"} onClick={addUserDetails}>
          Agree & Join
        </Button>
        <div className="divider divider-horizontal mt-6">OR</div>
        <Button height={"6vh"} border={"gray-500"} bgColor={"#F8FAFF"}>
          Continue with Google
        </Button>

        <div className="mt-6 text-center text-lg font-base text-black ">
          {" "}
          Already on JobShooter? <span className="text-blue-700">
            Sign in
          </span>{" "}
        </div>
      </OnboardingContainer>
    </>
  );
};

export default SignupForm;
