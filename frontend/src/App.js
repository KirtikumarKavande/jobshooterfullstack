import LocationDetails from "./components/UserOnboarding/UserDetails/LocationDetails";
import Signup from "./components/UserOnboarding/signup/Signup";
import Homepage from "./components/utilities/styles/Homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

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
  ]);

  return( <>
  <RouterProvider router={router}/>
  
  </>);
}
