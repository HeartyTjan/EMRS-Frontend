import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faCalendarAlt,
  faFile,
} from "@fortawesome/free-solid-svg-icons";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <ul>
          <li>
            <FontAwesomeIcon icon={faHome} width="10px" className="sideIcon" />
            Dashboard
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} width="10px" className="sideIcon" />
            Profile
          </li>
          <li>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              width="10px"
              className="sideIcon"
            />
            Book Appointment
          </li>
          {/* <li>
            <FontAwesomeIcon icon={faFile} width="10px" className="sideIcon" />
            Invoice
          </li> */}
          <li>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              width="10px"
              className="sideIcon"
            />
            Old Appointments
          </li>
          <li>
            <FontAwesomeIcon icon={faFile} width="10px" className="sideIcon" />
            Report
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
