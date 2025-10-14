
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
  work: [
    {
      position: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      isPresent: false,
      description: '',
    }
  ],
  education: [
    {
      degree: '',
      institution: '',
      location: '',
      startDate: '',
      endDate: '',
      isPresent: false,
      description: '',
    }
  ],
  skills: [],
  references: [
    {
      name: '',
      title: '',
      company: '',
      email: '',
    }
  ],
  currentWorkIndex: 0,
  currentEducationIndex: 0,
  currentReferenceIndex: 0,
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
      state.currentWorkIndex = state.work.length - 1;
    },
    updateWork: (state, action) => {
      const { index, data } = action.payload;
      if (state.work[index]) {
        state.work[index] = { ...state.work[index], ...data };
      }
    },
    deleteWork: (state, action) => {
      state.work.splice(action.payload, 1);
      state.currentWorkIndex = state.work.length > 0 ? 0 : null;
    },
    setCurrentWorkIndex: (state, action) => {
      state.currentWorkIndex = action.payload;
    },
    addEducation: (state, action) => {
      state.education.push(action.payload);
      state.currentEducationIndex = state.education.length - 1;
    },
    updateEducation: (state, action) => {
      const { index, data } = action.payload;
      if (state.education[index]) {
        state.education[index] = { ...state.education[index], ...data };
      }
    },
    deleteEducation: (state, action) => {
      state.education.splice(action.payload, 1);
      state.currentEducationIndex = state.education.length > 0 ? 0 : null;
    },
    setCurrentEducationIndex: (state, action) => {
      state.currentEducationIndex = action.payload;
    },
    addSkill: (state, action) => {
      state.skills.push(action.payload);
    },
    deleteSkill: (state, action) => {
      state.skills.splice(action.payload, 1);
    },
    addReference: (state, action) => {
      state.references.push(action.payload);
      state.currentReferenceIndex = state.references.length - 1;
    },
    updateReference: (state, action) => {
      const { index, data } = action.payload;
      if (state.references[index]) {
        state.references[index] = { ...state.references[index], ...data };
      }
    },
    deleteReference: (state, action) => {
      state.references.splice(action.payload, 1);
      state.currentReferenceIndex = state.references.length > 0 ? 0 : null;
    },
    setCurrentReferenceIndex: (state, action) => {
      state.currentReferenceIndex = action.payload;
    },
  },
});

export const {
  selectTemplate,
  updatePersonalInfo,
  addWork,
  updateWork,
  deleteWork,
  setCurrentWorkIndex,
  addEducation,
  updateEducation,
  deleteEducation,
  setCurrentEducationIndex,
  addSkill,
  deleteSkill,
  addReference,
  updateReference,
  deleteReference,
  setCurrentReferenceIndex,
} = resumeSlice.actions;

export default resumeSlice.reducer;
