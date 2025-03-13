import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
  name: "patient",
  initialState: {
    patientData: null,
  },
  reducers: {
    setPatientData(state, action) {
      state.patientData = action.payload;
    },
    clearPatient(state) {
      state.patientData = null;
    },
  },
});

export const { setPatientData, clearPatient } = patientSlice.actions;
export default patientSlice.reducer;
