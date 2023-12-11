import { createSlice } from "@reduxjs/toolkit";

const PostJobInformationSlice = createSlice({
  initialState: {
    jobTitle: "",
    companyName: "",
    jobLocation: "",
    WorkplaceType: "On-site",
    WorkType: "Full Time",
    maxExprience: 20,
    maxSalary: 100,
    minExprience: 0,
    minSalary: 0,
  },
  name: "pstJobInformation",
  reducers: {
    updateJobInformation(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateJobInformation } = PostJobInformationSlice.actions;

export default PostJobInformationSlice;
