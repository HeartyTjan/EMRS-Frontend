import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { clearPatient } from "../../app/PatientSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function Header({ patient, toggle, setToggle }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearPatient());
    navigate("/signin");
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className="header">
        <span className="icon" onMouseEnter={handleToggle}>
          &#9776;
        </span>
        <h2>Hospital Management System</h2>
        <div className="leftSide">
          <h3>
            <Link to="/patient/profile" className="headerlink">
              <FontAwesomeIcon
                icon={faUser}
                width="10px"
                className="headerFont"
              />
              {patient}
            </Link>
          </h3>

          <h3 onClick={() => handleLogout()}>Logout</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
