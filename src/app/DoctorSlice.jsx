import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    doctorData: null,
  },
  reducers: {
    setDoctorData(state, action) {
      state.doctorData = action.payload;
    },

    clearDoctorData(state) {
      state.doctorData = null;
    },
  },
});

export const { setDoctorData, clearDoctorData } = doctorSlice.actions;
export default doctorSlice.reducer;
