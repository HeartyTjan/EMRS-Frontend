import { createBrowserRouter } from "react-router-dom";
import SignIn from "../auth/signin/SignIn";
import Registration from "../auth/registration/Registration";
import PatientDashBoard from "../component/patientDashBoard/PatientDashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },

  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Registration />,
  },

  {
    path: "/book",
    children: [
      {
        path: "*",
        element: <PatientDashBoard />,
      },
    ],
  },
]);

export default router;
