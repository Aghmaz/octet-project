
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTemplate: null,
  personalInfo: {
    fullName: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    about: '',
  },
  work: [],
  education: [],
  skills: [],
  references: [],
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    selectTemplate: (state, action) => {
      state.selectedTemplate = action.payload;
    },
    updatePersonalInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },
    addWork: (state, action) => {
      state.work.push(action.payload);
    },
    addEducation: (state, action) => {
      state.education.push(action.payload);
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    addReference: (state, action) => {
      state.references.push(action.payload);
    },
  },
});

export const {
  selectTemplate,
  updatePersonalInfo,
  addWork,
  addEducation,
  addSkill,
  addReference,
} = resumeSlice.actions;

export default resumeSlice.reducer;
