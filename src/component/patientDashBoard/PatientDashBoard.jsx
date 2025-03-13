import SideBar from "../sideBar/SideBar";
import "./PatientDashBoard.css";
import Header from "../header/Header";
import { Outlet, useLocation } from "react-router-dom";
import PatientBody from "../patientBody/PatientBody";
import { useState } from "react";

function PatientDashBoard() {
  const location = useLocation();
  const [toggle, setToggle] = useState(false);

  return (
    <div className="layout">
      <Header patient="Patient" toggle={toggle} setToggle={setToggle} />
      <div className="sidePa">
        <SideBar toggle={toggle} />
        {location.pathname === "/patient" ? <PatientBody /> : <Outlet />}
      </div>
    </div>
  );
}

export default PatientDashBoard;
