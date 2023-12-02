import React from "react";
import SignUpContainer from "../../UserOnboarding/utilities/style/SignUpContainer";
import FloatingLabelInput from "../../Signin/FloatingLabelInput";
import useInput from "../../hooks/useInput";
import Button from "../../utilities/styles/Button";
import usePostDataToDB from "../../hooks/usePostDataToDB";

const SignUpForPostJob = () => {
  const { userInput, onChange } = useInput({ email: "", password: "" });
  const postDataToDB=usePostDataToDB()
  const handleSignUpToAccount = () => {
    postDataToDB("signin?admin=true",userInput)
  };
  return (
    <div>
      <SignUpContainer>
        <h1 className="font-bold text-3xl text-center mb-2"> Sign UP</h1>

        <h3 className="text-center mb-4 font-semibold">
          You can use same login for Job Post
        </h3>
        <div className="space-y-5">
          <FloatingLabelInput
            label="Email"
            onChange={onChange}
            name="email"
            inputTyped={userInput?.email}
          />
          <FloatingLabelInput
            label="Password"
            type="password"
            onChange={onChange}
            name="password"
            inputTyped={userInput?.password}
          />
        </div>

        <Button
          bgColor={"#0A66C2"}
          height={"7vh"}
          textColour={"white"}
          onClick={handleSignUpToAccount}
        >
          GO
        </Button>
      </SignUpContainer>
    </div>
  );
};

export default SignUpForPostJob;
