import React, { useState } from "react";
import Input from "../../UserOnboarding/utilities/style/Input";
import Button from "../../utilities/styles/Button";
import usePostDataToDB from "../../hooks/usePostDataToDB";
import useInput from "../../hooks/useInput";
import { passwordRegex } from "../../UserOnboarding/utilities/constant/Regex";
import { WRONG_PASSWORD } from "../../UserOnboarding/utilities/constant/constant";

const NewPasswordModel = () => {
  const postDataToDB = usePostDataToDB();
  const [showError, setShowError] = useState("");
  const { userInput, onChange } = useInput({
    password: "",
    confirmPassword: "",
  });

  const handlePassword = () => {
    if (userInput.password !== userInput.confirmPassword) {
      setShowError("Password do Not Match");
    } else if (!passwordRegex.test(userInput.password)) {
      setShowError(WRONG_PASSWORD);
    } else {
      postDataToDB("newPassword", userInput);
    }
  };

  return (
    <div className="card absolute bg-gray-50 ">
      <div className="card-body">
        <h2 className="card-header">Enter Password</h2>
        <div className="text-content2">
          <Input
            label="Password"
            name="password"
            onChange={onChange}
            type="text"
            onFocus={()=>{setShowError("")}}
          />
          <Input
            label="Retype-Password"
            name="confirmPassword"
            onChange={onChange}
            type="password"
            onFocus={()=>{setShowError("")}}

          />
          <Button
            bgColor="#0A66C2"
            height="50px"
            textColour="white"
            onClick={handlePassword}
          >
            Confirm
          </Button>
          { 
            <p className="text-red-600 pt-2 text-center">
             {showError}
            </p>
          }
        </div>
      </div>
    </div>
  );
};

export default NewPasswordModel;
