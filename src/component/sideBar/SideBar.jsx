import "./SideBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCalendarAlt,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

function SideBar({ toggle }) {
  return (
    <div className={`sidebar ${toggle ? "open" : ""}`}>
      <div className="sidebar-content">
        <ul>
          <li>
            <FontAwesomeIcon icon={faHome} width="10px" className="sideIcon" />
            <Link to="/patient" className="sidebar-link">
              Dashboard
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} width="10px" className="sideIcon" />
            <Link to="/patient/profile" className="sidebar-link">
              Profile
            </Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              width="10px"
              className="sideIcon"
            />
            <Link to="/patient/appointment" className="sidebar-link">
              Book Appointment
            </Link>
          </li>

          <li>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              width="10px"
              className="sideIcon"
            />
            <Link to="/patient/oldAppointment" className="sidebar-link">
              Old Appointments
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faFile} width="10px" className="sideIcon" />
            <Link to="/patient/reports" className="sidebar-link">
              Report
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
