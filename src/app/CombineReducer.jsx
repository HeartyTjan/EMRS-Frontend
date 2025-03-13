import { combineReducers } from "@reduxjs/toolkit";
import patientReducer from "./PatientSlice";
import doctorReducer from "./DoctorSlice";

const rootReducer = combineReducers({
  patient: patientReducer,
  doctor: doctorReducer,
});

export default rootReducer;
