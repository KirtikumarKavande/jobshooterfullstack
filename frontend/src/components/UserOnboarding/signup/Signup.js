import { useState } from "react";
import SignupForm from "./SignupForm";
import NameSurnameForm from "./NameSurnameForm";

const Signup = () => {
  const [isShowNameSurnameForm, setIsShowNameSurnameForm] = useState(true);

  return (
    <>
      {isShowNameSurnameForm ? (
        <SignupForm setIsShowNameSurnameForm={setIsShowNameSurnameForm} />
      ) : (
        <NameSurnameForm />
      )}
    </>
  );
};

export default Signup;
