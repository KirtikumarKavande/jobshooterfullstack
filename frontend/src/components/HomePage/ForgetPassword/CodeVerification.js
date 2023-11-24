import { useState } from "react";
import Button from "../../utilities/styles/Button";
import ForgetPasswordContainer from "../ForgetPassword/ForgetPasswordContainer";
import usePostDataToDB from "../../hooks/usePostDataToDB";
import toast from "react-hot-toast";
import NewPasswordModel from "./NewPasswordModel";
const CodeVerification = (props) => {
  const {userEmail,setIsVerifyOtp}=props
  const [enteredNumber, setEnteredNumber] = useState();
  const postDataToDB = usePostDataToDB();
  const [isShowPasswordModel, setIsShowPasswordModel] = useState(false);
  const enterVerificationCode = (event) => {
    const result = event.target.value.replace(/\D/g, "");

    setEnteredNumber(result);
  };
  const handleSubmitOtp = async () => {
    const res = await postDataToDB("verifyOtp", { otp: enteredNumber });

    if (res.success) {
      toast.success(res.message);
      setIsShowPasswordModel(true)
    } else {
      toast.error(res.message);
    }
  };
  const resendCode=async()=>{
    const res = await postDataToDB("emailverification", { email: userEmail });
    if(res.success) {
      toast.success("Verication Code Sent Successfully");
    }else{
      toast.error("Something Went Wrong")
    }

  }
  return (
    <ForgetPasswordContainer pageTitle="Enter the 6-digit code">
      {isShowPasswordModel && <NewPasswordModel />}

      <p className="text-base">
        Check <span className="font-bold">{userEmail}</span> for a verification code.{" "}
        <span className="text-blue-600 font-semibold cursor-pointer" onClick={()=>{setIsVerifyOtp(false)}}>
          Change
        </span>
      </p>

      <input
        value={enteredNumber}
        onChange={enterVerificationCode}
        className="w-full h-14 text-lg px-2 tracking-wider text-black border border-black rounded-md mt-2 focus:border-2 focus:border-blue-700 "
        placeholder="6 digit code"
        maxLength={6}
      />
      <p className="cursor-pointer mt-2 text-blue-600 font-semibold" onClick={resendCode}>
        Resend Code
      </p>
      <Button
        bgColor="#0A66C2"
        height="50px"
        textColour="white"
        onClick={handleSubmitOtp}
      >
        Submit
      </Button>

      <p className="text-gray-500 mt-3 text-sm">
        If you don't see a code in your inbox, check your spam folder. If it's
        not there, the email address may not be confirmed, or it may not match
        an existing LinkedIn account.
      </p>
    </ForgetPasswordContainer>
  );
};

export default CodeVerification;
