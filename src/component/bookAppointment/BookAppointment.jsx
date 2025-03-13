import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./BookAppointment.css";
import swal from "sweetalert2";

function BookAppointment() {
  const [date, setDate] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [doctors, setDoctors] = useState([]);

  const patientData = useSelector((state) => state.patient.patientData);
  const loggedInPatientId = patientData.id;

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleDoctorId = (event) => {
    setDoctorId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!doctorId) {
      alert("Please select a doctor");
    }
    if (!date) {
      alert("Please select a date");
    }

    const bookNewAppointmentdata = {
      dateAndTime: date,
      doctorID: doctorId,
      patientID: loggedInPatientId,
    };
    console.log(bookNewAppointmentdata);

    try {
      const response = await fetch("http://localhost:8080/appointment/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookNewAppointmentdata),
      });

      if (!response.ok) throw new Error("Request Failed");
      const data = await response.json();

      swal.fire({
        title: `${data.message}`,
        text: `Appionment id : ${data.appointmentId}`,
        icon: "success",
      });
    } catch (error) {
      console.error(error);
      swal.fire({
        title: "Your Appoinment booking failed",
        text: "Doctor is not available for this appointment",
        icon: "error",
      });
    }
  };

  const fecthDoctors = async () => {
    try {
      const response = await fetch("http://localhost:8080/doctor/getDoctors");

      if (!response) throw new Error("Request failed");
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fecthDoctors();
  }, []);

  return (
    <div className="book-appointment">
      <div className="appointmentHeaderText">
        <h1>Schedule An Appointment</h1>
      </div>
      <form action="" className="appointmentForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="dateLabel">
            <h3>Date</h3>
          </label>

          <input
            type="datetime-local"
            className="appointmentDateTime"
            value={date}
            onChange={handleDateChange}
          />
          <h3>Select Doctor</h3>
          <select
            name=""
            id="chooseDoctor"
            value={doctorId}
            onChange={handleDoctorId}
          >
            <option value="">Select Doctor</option>
            {doctors.map((doctor, index) => {
              const { id, firstName, lastName } = doctor;
              return (
                <option key={index} value={id}>
                  {firstName + " " + lastName}
                </option>
              );
            })}
          </select>

          <button className="bookAppointment">Book Appointment</button>
        </div>
      </form>
    </div>
  );
}

export default BookAppointment;
