
import toast from "react-hot-toast";
import { showUserSignup } from "../../store/UserSignupSlice";

export const handleSignIn = async (postDataToDB, getDataFromDB, navigate, dispatch, userInput) => {
    const res = await postDataToDB(`signin`, userInput);
  
    if (res.success) {
      toast.success(res.message);
  
      const userDetails = await getDataFromDB("userdetails");
  
      if (userDetails.success) {
        if (userDetails?.data?.profileInformation) {
          navigate("/user/home");
        } else {
          navigate("/onboarding/profile");
        }
      } else {
        navigate("/onboarding/location");
      }
    } else {
      toast.error(res.message);
    }
    dispatch(showUserSignup({ token: res.token }));
  };
  