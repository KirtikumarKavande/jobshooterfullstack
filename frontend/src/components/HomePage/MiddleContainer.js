import React from "react";
import IntroText from "./IntroText";
import Email from "./Email";
import Password from "./Password";
import { Link } from "react-router-dom";
import Button from "../utilities/styles/Button";
import { HOMEPAGE_IMAGE_URL } from "../utilities/constant/Home/homePageConstant";
import useInput from "../hooks/useInput";
import usePostDataToDB from "../hooks/usePostDataToDB";
import toast from "react-hot-toast";
const MiddleContainer = () => {
  const { userInput, onChange } = useInput();
  const postDataToDB = usePostDataToDB();

  const handleSignToAccount = async () => {
    const res = await postDataToDB(`signin`, userInput);
    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
      <IntroText />
      <Email onChange={onChange} name="email" />
      <Password onChange={onChange} name="password" />
      <div className="font-bold text-base mt-3 text-blue-600">
        Forget Password?
      </div>
      <Button
        bgColor={"#0A66C2"}
        height={"8vh"}
        width={30}
        textColour={"white"}
        onClick={handleSignToAccount}
      >
        Sign in
      </Button>
      <div className="divider divider-horizontal w-full lg:w-[30vw]  text-black ">
        OR
      </div>

      <Button height={"6vh"} width={30} border={"gray-500"} bgColor={"#F8FAFF"}>
        Continue with Google
      </Button>

      <Button bgColor={"#FFFFFF"} height={"8vh"} width={30} border={"black"}>
        New to Job? Join Now
      </Button>
      <img
        src={HOMEPAGE_IMAGE_URL}
        alt="home page"
        className="w-[100vw] mt-6  md:hidden"
      />
    </>
  );
};

export default MiddleContainer;
