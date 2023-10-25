import React from "react";
import OnboardingContainer from "../OnboardingContainer";
import Input from "../utilities/style/Input";
import PrivacyAndCookie from "../utilities/Functions/PrivacyAndCookie";
import Button from "../../utilities/styles/Button";

const UserDetails = () => {
  return (
    <OnboardingContainer>
      <Input label={"First name"} type="text" />
      <Input label={"Last name"} type="text" />
      <PrivacyAndCookie/>
      <Button bgColor={"#0A66C2"} height={"7vh"} textColour={"white"} >
          Agree & Join
        </Button>
    </OnboardingContainer>
  );
};

export default UserDetails;
