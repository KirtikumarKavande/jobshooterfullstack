import { createSlice } from "@reduxjs/toolkit";

const PostJobInformationSlice = createSlice({
  initialState: {
    jobTitle: "",
    companyName: "",
    jobLocation: "",
    WorkplaceType: "",
    WorkType: "",
    maxExprience: 20,
    maxSalary: 100,
    minExprience: 0,
    minSalary: 0,
  },
  name: "pstJobInformation",
  reducers: {
    updateJobInforation(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateJobInforation } = PostJobInformationSlice.actions;

export default PostJobInformationSlice;
