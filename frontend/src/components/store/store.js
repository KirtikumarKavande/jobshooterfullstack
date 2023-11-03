import { configureStore } from "@reduxjs/toolkit";
import userSignupSlice from "./UserSignupSlice";

const store = configureStore({ reducer: {userSignup:userSignupSlice.reducer} });

export default store;
