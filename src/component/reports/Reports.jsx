import { useEffect, useState } from "react";
import "./Report.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function Reports() {
  const [reports, setReports] = useState();
  const patientId = useSelector((state) => state.patient.patientData.id);

  const fetchReports = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/medicalRecord/${patientId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/Json" },
        }
      );
      if (!response) throw new Error("Request Failed");
      const data = await response.json();
      console.log(data);
      setReports(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReports();
  }, [reports]);

  return (
    <div>
      <div className="container">
        <h1>Patient Medical Report</h1>
        <table className="report-table">
          <thead>
            <tr>
              <th>Report Id</th>
              <th>Date And Time</th>
              <th>Doctor Name</th>
              <th>Diagnosis</th>
              <th>Treatment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reports?.map((report, index) => {
              const { id, recordDateTime, doctor, diagnosis, treatment } =
                report;
              const date = new Date(recordDateTime);

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
                  <td>{diagnosis}</td>
                  <td>{treatment}</td>
                  <td>
                    <button className="report-btn">
                      View Report
                      <FontAwesomeIcon icon={faEye} />
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

export default Reports;
