import React, { useEffect, useState } from "react";
import SignUpContainer from "../utilities/style/SignUpContainer";
import Input from "../utilities/style/Input";
import PrivacyAndCookie from "../utilities/Functions/PrivacyAndCookie";
import Button from "../../utilities/styles/Button";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { nameRegex } from "../utilities/constant/Regex";
import {
  WRONG_FIRSTNAME,
  WRONG_LASTNAME,
} from "../utilities/constant/constant";
import Error from "../utilities/style/Error";
import { useDispatch } from "react-redux";
import { showUserDetails } from "../../store/UserOnBoardSlice";

const NameSurnameForm = () => {
  const dispatch = useDispatch();
  
  const { userInput, onChange } = useInput({firstName:"",lastName:""});
  const [showError, setShowError] = useState({
    firstNameError: "",
    lastNameError: "",
  });
  const navigate = useNavigate();

  const NavigateToLocationPage = () => {
    if (!(nameRegex.test(userInput.firstName)) ) {
      setShowError({ firstNameError: WRONG_FIRSTNAME });
    } else if (!(nameRegex.test(userInput.lastName))) {
      setShowError({ lastNameError: WRONG_LASTNAME });
    } else {
      dispatch(showUserDetails(userInput));

      localStorage.setItem("jobshooterName",userInput.firstName);
      navigate("/onboarding/location");
    }
  };
  useEffect(() => {
    setShowError({ firstNameError: "", lastNameError: "" });
  }, [userInput.firstName, userInput.lastName]);
  console.log("outside",userInput.firstName)
  console.log("error watch", showError);
  return (
    <SignUpContainer>
      <Input
        label={"First name"}
        type="text"
        name="firstName"
        onChange={onChange}
      />
      {!!showError.firstNameError && (
        <Error errorMessage={showError.firstNameError} />
      )}
      <Input
        label={"Last name"}
        type="text"
        name="lastName"
        onChange={onChange}
      />
      {!!showError.lastNameError && (
        <Error errorMessage={showError.lastNameError} />
      )}

      <PrivacyAndCookie />
      <Button
        bgColor={"#0A66C2"}
        height={"7vh"}
        textColour={"white"}
        onClick={NavigateToLocationPage}
      >
        Agree & Join
      </Button>
    </SignUpContainer>
  );
};

export default NameSurnameForm;
