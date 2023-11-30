import React, { useEffect, useState } from "react";
import SignUpContainer from "../utilities/style/SignUpContainer";
import Input from "../utilities/style/Input";
import PrivacyAndCookie from "../utilities/Functions/PrivacyAndCookie";
import Button from "../../utilities/styles/Button";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import { nameRegex } from "../utilities/constant/Regex";
import { toast } from "react-hot-toast";

import Error from "../utilities/style/Error";
import { useDispatch, useSelector } from "react-redux";
import { showUserSignup } from "../../store/UserSignupSlice";
import usePostDataToDB from "../../hooks/usePostDataToDB";
import handleSignup from "../../utilities/Functions/handleSignup";

const NameSurnameForm = () => {
  const dispatch = useDispatch();
  const signUpUserDetails = useSelector((store) => store.userSignup);

  const postDatatoDB = usePostDataToDB();
  const { userInput, onChange } = useInput({ firstName: "", lastName: "" });
  const [showError, setShowError] = useState({
    firstNameError: "",
    lastNameError: "",
  });
  const navigate = useNavigate();


  const NavigateToLocationPage = async () => {
    // if (!nameRegex.test(userInput.firstName)) {
    //   setShowError({ firstNameError: WRONG_FIRSTNAME });
    // } else if (!nameRegex.test(userInput.lastName)) {
    //   setShowError({ lastNameError: WRONG_LASTNAME });
    // } else {
    //   dispatch(showUserSignup(userInput));
    //   localStorage.setItem("jobshooterName", userInput.firstName);

    //   const res = await postDatatoDB("createuser", {
    //     ...signUpUserDetails,
    //     ...userInput,
    //   });
    //   if (res.success) {
    //     toast.success(res.message);
    //     navigate("/onboarding/location");
    //   } else {
    //     toast.error(res.message);
    //   }
    // dispatch(showUserSignup({ token: res.token }));

    // }

   await handleSignup(
      userInput,
      setShowError,
      signUpUserDetails,
      dispatch,
      postDatatoDB,
      navigate
    );
  };
  useEffect(() => {
    setShowError({ firstNameError: "", lastNameError: "" });
  }, [userInput?.firstName, userInput?.lastName]);
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
