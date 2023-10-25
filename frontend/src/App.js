import Signup from "./components/UserOnboarding/Signup";
import Homepage from "./components/utilities/styles/Homepage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/onboarding/signup",
      element: <Signup />,
    },
  ]);

  return( <>
  <RouterProvider router={router}/>
  
  </>);
}
