import React from "react";
import OnboardingContainer from "./OnboardingContainer";
import Input from "./utilities/style/Input";
import PasswordInput from "./utilities/style/PasswordInput";
import Button from "../utilities/styles/Button";

const Signup = () => {
  return (
    <>
      
      {/* <div className="mx-[10vw]  text-4xl font-bold">Make the most of your professional life </div> */}
      <OnboardingContainer>
        <Input label={"Email"} type={"email"} />
        <PasswordInput />
        <div className=" text-sm mt-1 px-3">By clicking Agree & Join, you agree to the LinkedIn <span className="text-blue-700"> User Agreement, Privacy Policy </span>,<span className="text-blue-700"> and Cookie Policy </span>.</div>
        <Button
        bgColor={"#0A66C2"}
        height={"7vh"}
        textColour={"white"}
      >
        Agree & Join
      </Button>
      <div  class="divider divider-horizontal mt-6">OR</div>
      <Button height={"6vh"}  border={"gray-500"} bgColor={"#F8FAFF"}>
        Continue with Google
      </Button>

      <div className="mt-6 text-center text-lg font-base text-black "> Already on JobShooter? <span className="text-blue-700">Sign in</span> </div>
      </OnboardingContainer>
      
    </>
  );
};

export default Signup;
