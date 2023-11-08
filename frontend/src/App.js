import LocationDetails from "./components/UserOnboarding/UserDetails/LocationDetails";
import Signup from "./components/UserOnboarding/signup/Signup";
import Homepage from "./components/utilities/styles/Homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Profile from "./components/UserOnboarding/UserDetails/profile/Profile";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "onboarding/signup",
      element: <Signup />,
    },
    {
      path: "/onboarding/location",
      element: <LocationDetails />,
    },
    {
      path: "/onboarding/profile",
      element: <Profile />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}
