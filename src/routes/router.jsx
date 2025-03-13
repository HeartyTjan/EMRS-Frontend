import { createBrowserRouter } from "react-router-dom";
import SignIn from "../auth/signin/SignIn";
import Registration from "../auth/registration/Registration";
import PatientDashBoard from "../component/patientDashBoard/PatientDashBoard";
import BookAppointment from "../component/bookAppointment/BookAppointment";
import ShowAppointment from "../component/ShowingAppointment/ShowAppointment";
import PatientProfile from "../component/patientProfile/PatientProfile";
import Reports from "../component/reports/Reports";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <BookAppointment />,
    // element: <PatientDashBoard />,
    // element: <ShowAppointment />,
    // element: <PatientProfile />,
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
    path: "/patient",
    element: <PatientDashBoard />,
    children: [
      {
        path: "appointment",
        element: <BookAppointment />,
      },
      {
        path: "oldAppointment",
        element: <ShowAppointment />,
      },
      {
        path: "profile",
        element: <PatientProfile />,
      },

      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
]);

export default router;
