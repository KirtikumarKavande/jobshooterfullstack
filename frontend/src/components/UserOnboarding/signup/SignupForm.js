import React, { useEffect, useState } from "react";
import SignUpContainer from "../SignUpContainer";
import Input from "../utilities/style/Input";
import PasswordInput from "../utilities/style/PasswordInput";
import Button from "../../utilities/styles/Button";

import PrivacyAndCookie from "../utilities/Functions/PrivacyAndCookie";
// import useInput from "../../hooks/useInput"
import useInput from "../../hooks/useInput";
import { emailRegex } from "../utilities/constant/Regex";
import { passwordRegex } from "../utilities/constant/Regex";
import { WRONG_EMAIL } from "../utilities/constant/constant";
import { WRONG_PASSWORD } from "../utilities/constant/constant";
import Error from "../utilities/style/Error";

const SignupForm = (props) => {
  const [showError, setShowError] = useState({
    emaiError: "",
    passwordError: "",
  });
  const { setIsShowNameSurnameForm } = props;

  const { userInput, onChange } = useInput({});
  const addNameSurname = () => {
    if (!emailRegex.test(userInput.email)) {
      setShowError({ emaiError: WRONG_EMAIL });
    } else if (!passwordRegex.test(userInput.password)) {
      setShowError({ passwordError: WRONG_PASSWORD });
    } else {
      setIsShowNameSurnameForm(false);
    }
  };
  useEffect(() => {
    setShowError({ emaiError: "", passwordError: "" });
  }, [userInput.email, userInput.password]);

  return (
    <div className="">
      <SignUpContainer>
        <Input
          label={"Email"}
          type={"email"}
          name="email"
          onChange={onChange}
          value={userInput.email}
        />
        {!!showError.emaiError && <Error errorMessage={showError.emaiError} />}
        <PasswordInput onChange={onChange} value={userInput.password} />
        {!!showError.passwordError && (
          <Error errorMessage={showError.passwordError} />
        )}

        <PrivacyAndCookie />
        <Button
          bgColor={"#0A66C2"}
          height={"7vh"}
          textColour={"white"}
          onClick={addNameSurname}
        >
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
      </SignUpContainer>
    </div>
  );
};

export default SignupForm;
