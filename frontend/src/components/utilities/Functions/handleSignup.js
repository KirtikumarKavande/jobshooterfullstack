import toast from "react-hot-toast";
import { nameRegex } from "../../UserOnboarding/utilities/constant/Regex";
import {
  WRONG_FIRSTNAME,
  WRONG_LASTNAME,
} from "../../UserOnboarding/utilities/constant/constant";
import { showUserSignup } from "../../store/UserSignupSlice";
import preventGoingBack from "./preventGoingBack";

const handleSignup = async (
  userInput,
  setShowError,
  signUpUserDetails,
  dispatch,
  postDatatoDB,
  navigate
) => {
  console.log("userInput1",userInput);
  if (!nameRegex.test(userInput.firstName)) {
    setShowError({ firstNameError: WRONG_FIRSTNAME });
  } else if (!nameRegex.test(userInput.lastName)) {
    setShowError({ lastNameError: WRONG_LASTNAME });
  } else {
    dispatch(showUserSignup(userInput));
    localStorage.setItem("jobshooterName", userInput.firstName);

    console.log("userInput2",userInput)
    const res = await postDatatoDB("createuser", {
      ...signUpUserDetails,
      ...userInput,
    });
    console.log("response", res);
    if (res.success) {
      toast.success(res.message);
      navigate("/onboarding/location");
      preventGoingBack("/onboarding/location");
    } else {
      toast.error(res.message);
    }
    dispatch(showUserSignup({ token: res.token }));
  }
};
export default handleSignup;
