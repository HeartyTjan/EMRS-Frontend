import swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { setPatientData } from "../../app/PatientSlice";
import { setDoctorData } from "../../app/DoctorSlice";
import { useDispatch } from "react-redux";

import "./SignIn.css";
import { useState } from "react";
function SignIn() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [role, setRole] = useState("doctor");

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginEmail = (e) => {
    setLoginEmail(e.target.value);
  };

  const handleLoginPassword = (e) => {
    setLoginPassword(e.target.value);
  };

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    let errorMessage = {};
    if (!loginEmail) {
      errorMessage = "Email is required";
    }
    if (!loginPassword) {
      errorMessage = "password is required";
    }

    if (Object.keys(errorMessage).length > 0) {
      alert(errorMessage);
    } else {
      const userLoginData = {
        email: loginEmail,
        password: loginPassword,
      };

      if (role === "patient") {
        const patientApi = "http://localhost:8080/patient/login";
        const patientDashboard = "/patient";
        fetchFromApi(
          patientApi,
          patientDashboard,
          userLoginData,
          setPatientData
        );
      }

      if (role === "doctor") {
        const doctorApi = "http://localhost:8080/doctor/login";
        const doctorDashboard = "/doctorDashBoard";
        fetchFromApi(doctorApi, doctorDashboard, userLoginData, setDoctorData);
      }
    }
  };
  const fetchFromApi = async (
    urlLink,
    navigationPath,
    userLoginData,
    setUserData
  ) => {
    try {
      const response = await fetch(urlLink, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userLoginData),
      });
      if (!response.ok) throw new Error("Request Failed");

      const data = await response.json();

      const userData = data.data;

      // setPatientData(userData);
      if (setUserData) {
        dispatch(setUserData(userData));
      }
      // dispatch(setUserData(userData));
      console.log("Patient data from API:", userData);

      swal.fire({
        title: `${data.message}`,
      });
      if (data.success) {
        setTimeout(() => {
          navigate(navigationPath);
        }, 500);
      }
    } catch (error) {
      console.error(error);
      swal.fire({
        title: "Error",
        text: "Login failed. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="loginContainer">
      <div className="innerLoginContainer">
        <div className="loginFormContainer">
          <div className="loginToggle">
            <h4 className="loginAuthToggleSign-in">Sign in</h4>

            <h4 className="loginAuthToggleRegister">
              <Link to="/register">Register</Link>
            </h4>
          </div>
          <h1 className="signInText">Sign In</h1>

          <form className="loginForm" onSubmit={handleLoginSubmit}>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="loginInput"
              onChange={handleLoginEmail}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your password"
              className="loginInput"
              onChange={handleLoginPassword}
            />

            <select
              name="roleReg"
              id="roleReg"
              value={role}
              onChange={handleRole}
            >
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>

            <div className="loginCheckboxContainer">
              <input type="checkbox" name="checkbox" />
              <label>Remeber me</label>
            </div>

            <button>Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
