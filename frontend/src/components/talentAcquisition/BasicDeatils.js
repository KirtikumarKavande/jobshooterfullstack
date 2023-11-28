import React, { useState } from "react";
import MainConntainer from "./MainConntainer";
import CardContainer from "./CardContainer";
import Input from "../UserOnboarding/utilities/style/Input";
import PrivacyAndCookie from "../UserOnboarding/utilities/Functions/PrivacyAndCookie";
import Button from "../utilities/styles/Button";
import handleSignup from "../utilities/Functions/handleSignup";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import usePostDataToDB from "../hooks/usePostDataToDB";
import { useNavigate } from "react-router-dom";
import Error from "../UserOnboarding/utilities/style/Error";
import { emailRegex, passwordRegex } from "../UserOnboarding/utilities/constant/Regex";
import { WRONG_EMAIL, WRONG_PASSWORD } from "../UserOnboarding/utilities/constant/constant";

const BasicDeatils = () => {
  const signUpUserDetails={}

  const { userInput, onChange } = useInput({ firstName: "", lastName: "" });
  const navigate = useNavigate();

  const postDatatoDB = usePostDataToDB();

  const [showError, setShowError] = useState({
    firstNameError: "",
    lastNameError: "",
    emaiError:"",
    passwordError:''
  });
console.log("userInput",userInput)
console.log("userInput",showError)

  const dispatch = useDispatch();
  const handlesignupAccount = async () => {

    if (!emailRegex.test(userInput.email)) {
      setShowError({ emaiError: WRONG_EMAIL });
    } else if (!passwordRegex.test(userInput.password)) {
      setShowError({ passwordError: WRONG_PASSWORD });
    } else {
      setShowError("")
      await handleSignup(
        userInput,
        setShowError,
        signUpUserDetails,
  
        dispatch,
        postDatatoDB,
        navigate,
      );
    }
    
    
  };
  return (
    <>
      <MainConntainer bgColor={"#004182"}>
        <p className="text-white text-4xl text-center mb-8">
          Join LinkedIn to start your job post
        </p>

        <CardContainer>
          <Input label="First name" onChange={onChange} name="firstName" />
          {!!showError.firstNameError && (
            <Error errorMessage={showError.firstNameError}  />
          )}
          <Input label="Last name" onChange={onChange} name="lastName"/>
          {!!showError.lastNameError && (
            <Error errorMessage={showError.lastNameError} />
          )}
          <Input label="Email" onChange={onChange} name="email" />
          {!!showError.emaiError && (
            <Error errorMessage={showError.emaiError} />
          )}
          <Input
            label="Password (6 or more characters) "
            type="password"
            onChange={onChange}
            name="password"
          />
           {!!showError.passwordError && (
            <Error errorMessage={showError.passwordError} />
          )}
          <PrivacyAndCookie />
          <Button
            bgColor={"#0A66C2"}
            height={"7vh"}
            textColour={"white"}
            onClick={handlesignupAccount}
          >
            Join Now
          </Button>
          <p className="text-center mt-2">
            Already a JobShooter member?{" "}
            <span className="text-blue-700 cursor-pointer">Sign in</span>{" "}
          </p>
        </CardContainer>
      </MainConntainer>
    </>
  );
};

export default BasicDeatils;
