import { createSlice } from "@reduxjs/toolkit";

// Default CV data that gets populated when a template is selected
const getDefaultResumeData = () => ({
  personalInfo: {
    fullName: "Michael Johnson",
    title: "Team Lead",
    email: "michael.j@digitalinnovations.co",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    about: "Experienced team lead with 5+ years of expertise in software development and team management. Passionate about leading cross-functional teams to deliver high-quality software products and fostering collaborative work environments.",
  },
  work: [
    {
      position: "Team Lead",
      company: "Digital Innovations",
      location: "San Francisco, CA",
      startDate: "2020-01",
      endDate: "",
      isPresent: true,
      description: "Leading a team of 8 developers in building scalable web applications. Implemented microservices architecture reducing system latency by 40%. Mentored junior developers and conducted code reviews. Collaborated with stakeholders to define project requirements and timelines.",
    },
    {
      position: "Senior Software Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      startDate: "2018-06",
      endDate: "2019-12",
      isPresent: false,
      description: "Developed and maintained React-based web applications. Collaborated with designers to implement responsive UI components. Optimized database queries improving performance by 30%. Participated in code reviews and agile ceremonies.",
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of California",
      location: "Berkeley, CA",
      startDate: "2014",
      endDate: "2018",
      isPresent: false,
      description: "Graduated Magna Cum Laude. Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems.",
    },
  ],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "Git",
    "AWS",
    "Docker",
    "TypeScript",
    "MongoDB",
  ],
  references: [
    {
      name: "Sarah Williams",
      title: "Senior Manager",
      company: "Tech Solutions Inc.",
      email: "sarah.williams@techsolutions.com",
    },
    {
      name: "David Chen",
      title: "Director of Engineering",
      company: "Digital Innovations",
      email: "david.chen@digitalinnovations.co",
    },
  ],
});

const initialState = {
  // 🌟 Selected Template
  selectedTemplate: null,

  // 👤 Personal Info
  personalInfo: {
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    about: "",
  },

  // 💼 Work Experience
  work: [
    {
      position: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      isPresent: false,
      description: "",
     

    },
  ],

  // 🎓 Education
  education: [
    {
      degree: "",
      institution: "",
      location: "",
      startDate: "",
      endDate: "",
      isPresent: false,
      description: "",
      

    },
  ],

  // 🧠 Skills
  skills: [],

  // 📜 References
  references: [
    {
      name: "",
      title: "",
      company: "",
      email: "",
    },
  ],

  // Current index trackers
  currentWorkIndex: 0,
  currentEducationIndex: 0,
  currentReferenceIndex: 0,

  // 🎨 Theme Color
  themeColor: "#e7eef7",
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    // ✅ Select Template - Load default data if template is being selected for the first time
    selectTemplate: (state, action) => {
      const templateName = action.payload;
      state.selectedTemplate = templateName;
      
      // Only populate default data if all fields are empty (first time selecting a template)
      const isDataEmpty = 
        !state.personalInfo.fullName &&
        state.work.length === 1 &&
        !state.work[0].position &&
        state.education.length === 1 &&
        !state.education[0].degree &&
        state.skills.length === 0 &&
        state.references.length === 1 &&
        !state.references[0].name;

      if (isDataEmpty && templateName) {
        const defaultData = getDefaultResumeData();
        
        // Set personal info
        state.personalInfo = { ...state.personalInfo, ...defaultData.personalInfo };
        
        // Set work experience
        state.work = defaultData.work;
        state.currentWorkIndex = defaultData.work.length > 0 ? defaultData.work.length - 1 : 0;
        
        // Set education
        state.education = defaultData.education;
        state.currentEducationIndex = defaultData.education.length > 0 ? defaultData.education.length - 1 : 0;
        
        // Set skills
        state.skills = defaultData.skills;
        
        // Set references
        state.references = defaultData.references;
        state.currentReferenceIndex = defaultData.references.length > 0 ? defaultData.references.length - 1 : 0;
      }
    },

    // 🔁 Reset Template (optional: clear everything)
    resetResume: (state) => {
      Object.assign(state, initialState);
    },

    // 👤 Personal Info
    updatePersonalInfo: (state, action) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
    },

    // 💼 Work
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
      const index = action.payload;
      if (index >= 0 && index < state.work.length) {
        state.work.splice(index, 1);
        state.currentWorkIndex = Math.max(0, state.work.length - 1);
      }
    },
    setCurrentWorkIndex: (state, action) => {
      state.currentWorkIndex = action.payload;
    },

    // 🎓 Education
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
      const index = action.payload;
      if (index >= 0 && index < state.education.length) {
        state.education.splice(index, 1);
        state.currentEducationIndex = Math.max(0, state.education.length - 1);
      }
    },
    setCurrentEducationIndex: (state, action) => {
      state.currentEducationIndex = action.payload;
    },

    // 🧠 Skills
    addSkill: (state, action) => {
      if (action.payload && !state.skills.includes(action.payload)) {
        state.skills.push(action.payload);
      }
    },
    deleteSkill: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.skills.length) {
        state.skills.splice(index, 1);
      }
    },
    

    // 📜 References
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
      const index = action.payload;
      if (index >= 0 && index < state.references.length) {
        state.references.splice(index, 1);
        state.currentReferenceIndex = Math.max(0, state.references.length - 1);
      }
    },
    setCurrentReferenceIndex: (state, action) => {
      state.currentReferenceIndex = action.payload;
    },

    // 🎨 Theme Color
    updateThemeColor: (state, action) => {
      state.themeColor = action.payload;
    },

    
  },
});

export const {
  selectTemplate,
  resetResume,
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
  updateThemeColor,
} = resumeSlice.actions;

export default resumeSlice.reducer;
