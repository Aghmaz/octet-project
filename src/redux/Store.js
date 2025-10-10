



import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "../redux/Resume_slice";

const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});

export default store;
