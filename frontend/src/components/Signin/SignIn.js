import React from "react";
import SignUpContainer from "../UserOnboarding/utilities/style/SignUpContainer";
import FloatingLabelInput from "./FloatingLabelInput";

import Button from "../utilities/styles/Button";
import { handleSignIn } from "../utilities/Functions/handleSignIn";
import useInput from "../hooks/useInput";
import usePostDataToDB from "../hooks/usePostDataToDB";
import useGetDataFromDB from "../hooks/useGetDataFromDB";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const { userInput, onChange } = useInput({ email: "", password: "" });

  const postDataToDB = usePostDataToDB();
  const getDataFromDB = useGetDataFromDB();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignToAccount = async () => {
    await handleSignIn(
      postDataToDB,
      getDataFromDB,
      navigate,
      dispatch,
      userInput
    );
  };
  return (
    <>
      <SignUpContainer>
        <p className="font-bold text-lg">Sign in</p>
        <p className="text-sm">Stay updated on your professional world</p>
        <FloatingLabelInput
          label="Email"
          onChange={onChange}
          name="email"
          inputTyped={userInput.email}
        />
        <FloatingLabelInput
          label="Password"
          type="password"
          onChange={onChange}
          name="password"
          inputTyped={userInput.password}
        />
        <div className="font-semibold text-blue-600 mt-2 cursor-pointer "onClick={()=>{navigate('/forgetpassword')}}>Forget Password</div>
        <Button
          bgColor={"#0A66C2"}
          height={"7vh"}
          textColour={"white"}
          onClick={handleSignToAccount}
        >
          Sign in
        </Button>
        <div className="divider divider-horizontal w-full  text-black ">OR</div>
        <Button height={"6vh"} border={"gray-700"} bgColor={"#F8FAFF"}>
          Continue with Google
        </Button>
      </SignUpContainer>
      <div className="text-center mt-4"> New to JobShooter? <span className="text-blue-600 font-bold cursor-pointer" onClick={()=>{navigate('/onboarding/signup')}}>Join Now</span> </div>
    </>
  );
};

export default SignIn;
