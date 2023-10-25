import { createSlice } from "@reduxjs/toolkit";

const UserOnBoardSlice = createSlice({
  initialState: {  },
  name: "useronboard",
  reducers: {
    showUserDetails(state, action) {},
  },
});
export const { showUserDetails } = UserOnBoardSlice.actions;
export default UserOnBoardSlice;
