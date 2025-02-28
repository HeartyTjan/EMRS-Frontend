import { Link } from "react-router-dom";
import "./Registration.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";

function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("doctor");
  const [showPassword, setShowPassword] = useState(false);

  let navigate = useNavigate();

  const handleFirstNameInput = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameInput = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let errorMessage = {};

    if (!firstName) {
      errorMessage = "First Name is required";
    }
    if (!lastName) {
      errorMessage = "Last Name is required";
    }
    if (!email) {
      errorMessage = " Email is required";
    }

    if (!password) {
      errorMessage = "Password is required";
    }
    if (Object.keys(errorMessage).length > 0) {
      alert(errorMessage);
    } else {
      const newUserData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        role: role,
      };

      try {
        const response = await fetch("http://localhost:8080/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUserData),
        });
        if (!response.ok) throw new Error("Request Failed");
        const data = await response.json();

        swal.fire({
          title: "Registration Successfull",
        });
        if (data.success) {
          navigate("/signin");
        }
      } catch (error) {
        console.error(error);
        swal.fire({
          title: "Registration Failed",
          text: "Your registration failed.",
        });
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="registrationContainer">
      <div className="innerRegistrationContainer">
        <div className="formContainer">
          <div className="toggle">
            <h4 className="authToggleRegister">Register</h4>
            <h4 className="authToggleSign-in">
              <Link to="/signin">Sign in</Link>
            </h4>
          </div>

          <h1 className="registerText">Register</h1>

          <form className="registerForm" onSubmit={handleSubmit}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter Your First Name"
              className="customInput"
              onChange={handleFirstNameInput}
            />

            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Your Last Name"
              className="customInput"
              onChange={handleLastNameInput}
            />

            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="customInput"
              onChange={handleEmailInput}
            />

            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Enter Your password"
              className="customInput"
              onChange={handlePassword}
            />
            <button type="button" onClick={togglePasswordVisibility}>
              {/* {showPassword ? "Hide" : "Show"} */}
            </button>

            <select
              name="roleReg"
              id="roleReg"
              value={role}
              onChange={handleRole}
            >
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>

            <div className="checkboxContainer">
              <input type="checkbox" name="checkbox" />
              <label>I agree to the terms and conditions</label>
            </div>

            <button className="signUp">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
