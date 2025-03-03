import "./PatientBody.css";
import { Link } from "react-router-dom";
function PatientBody() {
  return (
    <div className="patient-container">
      {/* <div className="body"> */}
      <div className="service-header">Patient Dashboard</div>
      <div className="service-container">
        <div className="profile-container">
          <h2>Profile</h2>
          <h4>Manage your profile</h4>
        </div>

        <div className="book-appointment-container">
          <Link to="/book/appointment">
            <h2>Make Appointment</h2>
          </Link>

          <h4>Schedule appointments and consultations</h4>
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
    // </div>
  );
}

export default PatientBody;
