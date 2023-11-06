import { configureStore } from "@reduxjs/toolkit";
import userSignupSlice from "./UserSignupSlice";
import locationSlice from "./LocationSlice";

const store = configureStore({ reducer: {userSignup:userSignupSlice.reducer,location:locationSlice.reducer} });

export default store;
