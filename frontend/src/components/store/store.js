import { configureStore } from "@reduxjs/toolkit";
import UserOnBoardSlice from "./UserOnBoardSlice";

const store = configureStore({ reducer: {userOnBoard:UserOnBoardSlice.reducer} });

export default store;
