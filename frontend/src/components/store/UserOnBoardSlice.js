import { createSlice } from "@reduxjs/toolkit";

const UserOnBoardSlice = createSlice({
  initialState: {email:"",password:"",firstName:"",lastName:""  },
  name: "useronboard",
  reducers: {
    showUserDetails(state, action) {
      return {...state,...action.payload}
    },
  },
});
export const { showUserDetails } = UserOnBoardSlice.actions;
export default UserOnBoardSlice;
