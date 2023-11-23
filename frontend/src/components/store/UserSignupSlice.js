import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const UserSignupSlice = createSlice({
  initialState: { email: "", password: "", firstName: "", lastName: "",token:Cookies.get("token")},
  name: "userSignup",
  reducers: {
    showUserSignup(state, action) {
      return { ...state, ...action.payload };
    },
  },
});
export const { showUserSignup } = UserSignupSlice.actions;
export default UserSignupSlice;
