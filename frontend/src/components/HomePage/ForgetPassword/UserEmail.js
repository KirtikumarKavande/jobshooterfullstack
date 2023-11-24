import ForgetPasswordContainer from "./ForgetPasswordContainer";
import FloatingLabelInput from "./FloatingLabelInput";

import useInput from "../../hooks/useInput";
import Button from "../../utilities/styles/Button";

const UserEmail = () => {
  const { userInput, onChange } = useInput({ email: "" });

  return (
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
      <Button bgColor="#0A66C2" height="50px" textColour="white">
        Next
      </Button>
      <button className=" w-full hover:underline mt-2">Back</button>
    </ForgetPasswordContainer>
  );
};

export default UserEmail;
