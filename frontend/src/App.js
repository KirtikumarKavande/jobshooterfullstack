import LocationDetails from "./components/UserOnboarding/UserDetails/LocationDetails";
import Signup from "./components/UserOnboarding/signup/Signup";
import Homepage from "./components/utilities/styles/Homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Profile from "./components/UserOnboarding/UserDetails/profile/Profile";
import Home from "./components/RestrictedPages/Home";
import { useSelector } from "react-redux";
import UserEmail from "./components/HomePage/ForgetPassword/UserEmail";
import SignIn from "./components/Signin/SignIn";
import BasicDeatils from "./components/talentAcquisition/BasicDeatils";
export default function App() {
  const token = useSelector((store) => store?.userSignup?.token);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/onboarding/signup",
      element: <Signup />,
    },
  
    {
      path: "/onboarding/location",
      element: !!token ? <LocationDetails /> : <Homepage />,
    },
    {
      path: "/onboarding/profile",
      element: !!token ? <Profile /> : <Homepage />,
    },
    {
      path: "/user/home",
      element: !!token ? <Home /> : <Homepage />,
    },
    {
      path: "/forgetpassword",
      element:<UserEmail/>,
    },
    {
      path: "/talent/basic",
      element:<BasicDeatils/>,
    },



  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}
