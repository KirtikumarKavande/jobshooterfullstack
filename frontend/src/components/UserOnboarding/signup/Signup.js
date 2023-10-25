import { useState } from "react";
import SignupForm from "./SignupForm";
import UserDetails from "./UserDetails";
import { useSelector } from "react-redux";

const Signup = () => {
  const [isShowUserDetailsForm, setIsShowUserDetailsForm] = useState(true);

  return (
    <>
      {isShowUserDetailsForm ? (
        <SignupForm setIsShowUserDetailsForm={setIsShowUserDetailsForm} />
      ) : (
        <UserDetails />
      )}
    </>
  );
};

export default Signup;
