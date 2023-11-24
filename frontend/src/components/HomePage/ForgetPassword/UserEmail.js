import ForgetPasswordContainer from "./ForgetPasswordContainer";
import FloatingLabelInput from "./FloatingLabelInput";

import useInput from "../../hooks/useInput";
import Button from "../../utilities/styles/Button";
import usePostDataToDB from "../../hooks/usePostDataToDB";
import toast from "react-hot-toast";
import { useState } from "react";
import CodeVerification from "./CodeVerification";
import { useNavigate } from "react-router-dom";

const UserEmail = () => {
  const { userInput, onChange } = useInput({ email: "" });
  const navigate=useNavigate()
  const postDataToDB = usePostDataToDB();
  const [isVerifyOtp, setIsVerifyOtp] = useState(false);
  const handleForgetPassword = async () => {
    const res = await postDataToDB("emailverification", userInput);
    if (res.success) {
        setIsVerifyOtp(true)
    }else{
        toast.error(res.message);

    }
  };
  return (
    <>
      {!isVerifyOtp ? (
        <ForgetPasswordContainer pageTitle="Forgot password">
          <FloatingLabelInput
            label="Email"
            onChange={onChange}
            userInput={userInput}
            name="email"
          />
          <p className="pt-2">
            We’ll send a verification code to this email or phone number if it
            matches an existing LinkedIn account.
          </p>
          <Button
            bgColor="#0A66C2"
            height="50px"
            textColour="white"
            onClick={handleForgetPassword}
          >
            Next
          </Button>
          <button className=" w-full hover:underline mt-2"onClick={()=>{navigate('/')}}>Back</button>
        </ForgetPasswordContainer>
      ) : (
        <CodeVerification userEmail={userInput.email} setIsVerifyOtp={setIsVerifyOtp} />
      )}
    </>
  );
};

export default UserEmail;
