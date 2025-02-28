import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header({ Patient }) {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogout(true);
    if (logout) {
      navigate("/signin");
    }
  };

  return (
    <div>
      <div className="header">
        <h2>Hospital Management System</h2>
        <div className="leftSide">
          <h3>
            <FontAwesomeIcon
              icon={faUser}
              width="10px"
              className="headerFont"
            />
            {Patient}
          </h3>
          <h3 onClick={() => handleLogout()}>Logout</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
