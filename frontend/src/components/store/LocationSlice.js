const { createSlice } = require("@reduxjs/toolkit");

const locationSlice = createSlice({
  name: "location",
  initialState: { country: "", state: "", city: "" },
  reducers: {
    updateLocationDetails(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateLocationDetails } = locationSlice.actions;

export default locationSlice;
 