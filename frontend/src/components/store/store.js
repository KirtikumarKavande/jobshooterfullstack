import { configureStore } from "@reduxjs/toolkit";
import userSignupSlice from "./UserSignupSlice";
import locationSlice from "./LocationSlice";
import PostJobInformationSlice from "./PostJobInformationSlice";

const store = configureStore({
  reducer: {
    userSignup: userSignupSlice.reducer,
    location: locationSlice.reducer,
    jobPostInfo: PostJobInformationSlice.reducer,
  },
});

export default store;
