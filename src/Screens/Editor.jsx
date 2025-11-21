import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import PersonalInfoForm from '../Components/Personal_info';
import WorkExperienceForm from '../Components/Work_experience';
import EducationForm from '../Components/Education';
import SkillsForm from '../Components/Skills';
import ReferencesForm from '../Components/Refrences';
import ResumePreview from '../redux/Resume_preview';
import Navbar from '../Components/Navbar';
// MUI Icons
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import PeopleIcon from '@mui/icons-material/People';

const EditorScreen = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    
  };

  return (
    <>
    <Navbar/>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Left: Form with Tabs */}
      <div className="p-4 border rounded-xl shadow">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab icon={<PersonIcon />} label="Personal" />
          <Tab icon={<WorkIcon />} label="Work" />
          <Tab icon={<SchoolIcon />} label="Education" />
          <Tab icon={<CodeIcon />} label="Skills" />
          <Tab icon={<PeopleIcon />} label="References" />
        </Tabs>

        <Box className="mt-6">
          {activeTab === 0 && <PersonalInfoForm />}
          {activeTab === 1 && <WorkExperienceForm />}
          {activeTab === 2 && <EducationForm />}
          {activeTab === 3 && <SkillsForm />}
          {activeTab === 4 && <ReferencesForm />}
        </Box>
      </div>

      {/* Right: Live Preview */}
      <div className="p-4 border rounded-xl shadow bg-gray-50 overflow-auto" style={{ maxHeight: 'calc(100vh - 150px)' }}>
        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
        <div className="min-h-[297mm]">
          <ResumePreview />
        </div>
      </div>
    </div>
    </>
  );
};

export default EditorScreen;
