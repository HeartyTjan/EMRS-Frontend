import SideBar from "../sideBar/SideBar";
import "./PatientDashBoard.css";
import Header from "../header/Header";

function PatientDashBoard() {
  return (
    <div className="patient-container">
      <Header Patient="Patient" />
      <div className="body">
        <SideBar
          dashboard="Dashboard"
          profile="Profile"
          appointments="Book Appointment"
          previousAppointments="Previous Appointments"
          report="View Report"
        />

        <div className="service-header">Patient Dashboard</div>
        <div className="service-container">
          <div className="profile-container">
            <h2>Profile</h2>
            <h4>Manage your profile</h4>
          </div>

          <div className="book-appointment-container">
            <h2>Make Appointment</h2>
            <h4>Schedule and manage appointments and consultations</h4>
          </div>

          <div className="report-container">
            <h2>My Reports</h2>
            <h4>Check all reports you have done already</h4>
          </div>

          <div className="previous-appointment-container">
            <h2>Previous Appointments</h2>
            <h4>See the history of your previous bookings</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashBoard;
