import React from "react";
import SignUpContainer from "../UserOnboarding/utilities/style/SignUpContainer";
import FloatingLabelInput from "./FloatingLabelInput";

import Button from  "../utilities/styles/Button"

const SignIn = () => {
  return (
    <SignUpContainer>
      <p className="font-bold text-lg">Sign in</p>
      <p className="text-sm">Stay updated on your professional world</p>
      <FloatingLabelInput label="Email"/>
      <FloatingLabelInput label="Password" type="password"/>
      <div className="font-semibold text-blue-600 mt-2">Forget Password</div>
      <Button
        bgColor={"#0A66C2"}
        height={"7vh"}
        textColour={"white"}
        // onClick={handleLocationData}
      >
        Sign in
      </Button>
      <div className="divider divider-horizontal w-full  text-black ">
        OR
      </div>
      <Button height={"6vh"}  border={"gray-700"} bgColor={"#F8FAFF"}>
        Continue with Google
      </Button>
    </SignUpContainer>
  );
};

export default SignIn;
