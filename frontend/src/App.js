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
import Job from "./components/RestrictedPages/Job/Job";
import SignUpForPostJob from "./components/RestrictedPages/Job/SignUpForPostJob";
import JobInformation from "./components/RestrictedPages/Job/JobInformation";
import Description from "./components/RestrictedPages/Job/Form/Description";
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
      children: [
        {
          path: "/user/home/jobs",
          element: <Job />,
        },
        {
          path: "/user/home/postjob/beadmin",
          element: <SignUpForPostJob />,
        },
        {
          path: "/user/home/jobposting",
          element: <JobInformation />,
        },
        {
          path: "/user/home/jobposting/form/description",
          element: <Description />,
        },
      ],
    },
    {
      path: "/forgetpassword",
      element: <UserEmail />,
    },
    {
      path: "/talent/basic",
      element: <BasicDeatils />,
    },
    {
      path: "/Job",
      element: <Job />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}
