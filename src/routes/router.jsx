import { createBrowserRouter } from "react-router-dom";
import SignIn from "../auth/signin/SignIn";
import Registration from "../auth/registration/Registration";
import PatientDashBoard from "../component/patientDashBoard/PatientDashBoard";
import BookAppointment from "../component/bookAppointment/BookAppointment";

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
    element: <PatientDashBoard />,
    children: [
      {
        path: "/book/appointment",
        element: <BookAppointment />,
      },
    ],
  },
]);

export default router;
