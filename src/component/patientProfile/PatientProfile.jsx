import { useState } from "react";
import { useSelector } from "react-redux";
import "./PatientProfile.css";
import Swal from "sweetalert2";
function PatientProfile() {
  const patientInfo = useSelector((state) => state.patient.patientData);
  const { firstName, lastName, email } = patientInfo;
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handlePasswordInput = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log("OLD " + passwords.oldPassword);
    console.log("New " + passwords.newPassword);
  };
  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    if (passwords.newPassword != passwords.confirmPassword) {
      Swal.fire({
        title: "Passwords do not match",
        text: "Please ensure new password and confirm password are identical.",
      });
    } else {
      const changePasswordData = {
        patientId: patientInfo.id,
        oldPassword: passwords.oldPassword,
        newPassword: passwords.newPassword,
      };

      try {
        const response = await fetch(
          "http://localhost:8080/patient/changePassword",
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(changePasswordData),
          }
        );
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        console.log(data);
        if (data) {
          Swal.fire({
            title: "Password changed successfully",
            text: "Your password has been updated.",
          });
        } else {
          Swal.fire({
            title: "Password change failed",
            text: "Enter a valid old Password",
          });
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className="profileBody-container">
      <h1>Patient Profile</h1>
      <div className="forflex">
        <div className="updatePatientProfile">
          <div className="update-profile">
            <h2>Update Profile</h2>
            <form>
              <div className="file-upload">
                <input type="file" id="file-upload" accept="image/*" />
                <button type="submit" className="fileuploadBtn">
                  Update
                </button>
              </div>
            </form>
          </div>

          <div className="details">
            <h2>Patient Details</h2>
            <table className="profile-table">
              <tbody>
                <tr>
                  <th>Name:</th>
                  <td>{firstName + " " + lastName}</td>
                </tr>
                <tr>
                  <th>Gender:</th>
                  <td>Male</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>{email}</td>
                </tr>
                <tr>
                  <th>Marital Status:</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Phone Number:</th>
                  <td></td>
                </tr>
                <tr>
                  <th>Date Of Birth:</th>
                  <td></td>
                </tr>
                <tr>
                  <th>State:</th>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="usernameBody">
          <div className="change-username">
            <h2>Change Email</h2>
            <input type="text" placeholder="Enter New Email" />
            <button className="changEmailButton">Submit</button>
          </div>

          <form onSubmit={handlePasswordSubmit}>
            <div className="change-password">
              <h2>Change Password</h2>
              <input
                type="password"
                name="oldPassword"
                placeholder="Enter Old Password"
                onChange={handlePasswordInput}
              />
              <input
                type="password"
                name="newPassword"
                placeholder="Enter New Password"
                onChange={handlePasswordInput}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Retype Password"
                onChange={handlePasswordInput}
              />
              <button className="passwordBtn">Update Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PatientProfile;
