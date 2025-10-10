import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addEducation } from '../redux/Resume_slice';

const EducationForm = () => {
  const dispatch = useDispatch();
  const [edu, setEdu] = useState({ school: '', degree: '', year: '' });

  const handleChange = (e) => {
    setEdu({ ...edu, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    dispatch(addEducation(edu));
    setEdu({ school: '', degree: '', year: '' });
  };

  return (
    <div className="space-y-4">
      <TextField label="School" name="school" value={edu.school} onChange={handleChange} fullWidth />
      <TextField label="Degree" name="degree" value={edu.degree} onChange={handleChange} fullWidth />
      <TextField label="Year" name="year" value={edu.year} onChange={handleChange} fullWidth />
      <Button variant="contained" onClick={handleAdd}>Add Education</Button>
    </div>
  );
};

export default EducationForm;
