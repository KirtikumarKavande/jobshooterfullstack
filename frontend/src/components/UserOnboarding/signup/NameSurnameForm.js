import React, { useState } from "react";
import OnboardingContainer from "../OnboardingContainer";
import Input from "../utilities/style/Input";
import PrivacyAndCookie from "../utilities/Functions/PrivacyAndCookie";
import Button from "../../utilities/styles/Button";
import useInput from "../../hooks/useInput";

const NameSurnameForm = () => {
  const { userInput, onChange } = useInput({});

  return (
    <OnboardingContainer>
      <Input
        label={"First name"}
        type="text"
        name="firstName"
        onChange={onChange}
      />
      <Input
        label={"Last name"}
        type="text"
        name="lastName"
        onChange={onChange}
      />
      <PrivacyAndCookie />
      <Button bgColor={"#0A66C2"} height={"7vh"} textColour={"white"}>
        Agree & Join
      </Button>
    </OnboardingContainer>
  );
};

export default NameSurnameForm;
