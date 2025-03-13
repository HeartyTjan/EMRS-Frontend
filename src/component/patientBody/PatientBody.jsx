import "./PatientBody.css";
import { Link } from "react-router-dom";
function PatientBody() {
  return (
    <div className="patient-container">
      <div className="service-header">Patient Dashboard</div>
      <div className="service-container">
        <div className="profile-container">
          <Link to="/patient/profile" className="body-link">
            <h2>Profile</h2>
          </Link>

          <h4>Manage your profile</h4>
        </div>

        <div className="book-appointment-container">
          <Link to="/patient/appointment" className="body-link">
            <h2>Make Appointment</h2>
          </Link>

          <h4>Schedule appointments and consultations</h4>
        </div>

        <div className="report-container">
          <Link to="/patient/reports" className="body-link">
            <h2>My Reports</h2>
          </Link>
          <h4>Check all reports you have done already</h4>
        </div>

        <div className="previous-appointment-container">
          <Link to="/patient/oldAppointment" className="body-link">
            <h2>Previous Appointments</h2>
          </Link>

          <h4>See the history of your previous bookings</h4>
        </div>
      </div>
    </div>
  );
}

export default PatientBody;
