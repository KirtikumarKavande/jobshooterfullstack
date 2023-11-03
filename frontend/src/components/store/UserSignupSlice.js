import { createSlice } from "@reduxjs/toolkit";

const UserSignupSlice = createSlice({
  initialState: { email: "", password: "", firstName: "", lastName: "" },
  name: "userSignup",
  reducers: {
    showUserSignup(state, action) {
      return { ...state, ...action.payload };
    },
  },
});
export const { showUserSignup } = UserSignupSlice.actions;
export default UserSignupSlice;
