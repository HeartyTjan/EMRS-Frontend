import { useEffect, useState } from "react";
import "./ShowAppointment.css";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
function ShowAppointment() {
  const [appointments, setAppointments] = useState([]);

  const patientId = useSelector((state) => state.patient.patientData.id);

  const fetchAppointment = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/appointment/${patientId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) throw new Error("Request Failed");
      const data = await response.json();

      setAppointments(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAppointment();
  }, [appointments]);

  const handleCancelAppointment = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/appointment/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (!response) throw new Error("Request Failed");

      Swal.fire({
        title: "Appointment Cancelled",
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="app-container">
        <h1>Patient Appointment Schedule</h1>
        <table className="app-table">
          <thead>
            <tr>
              <th>Appointment Id</th>
              <th>Date And Time</th>
              <th>Doctor Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => {
              const { id, appointmentDateTime, doctor, status } = appointment;
              const date = new Date(appointmentDateTime);

              const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              };
              const formattedDateTime = new Intl.DateTimeFormat(
                "en-US",
                options
              ).format(date);
              return (
                <tr key={index}>
                  <td>{id}</td>
                  <td>{formattedDateTime}</td>
                  <td>{doctor.firstName + " " + doctor.lastName}</td>
                  <td>{status}</td>
                  <td>
                    <button onClick={() => handleCancelAppointment(id)}>
                      Cancel Appointment
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowAppointment;
