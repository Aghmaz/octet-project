import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addWork } from '../redux/Resume_slice';

const WorkExperienceForm = () => {
  const dispatch = useDispatch();
  const [work, setWork] = useState({ company: '' });

  const handleChange = (e) => {
    setWork({ ...work, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    dispatch(addWork(work));
    setWork({ company: '' });
  };

  return (
    <div className="space-y-4">
      <TextField label="Company" name="company" value={work.company} onChange={handleChange} fullWidth />
    
      <Button variant="contained" onClick={handleAdd}>Add Work</Button>
    </div>
  );
};

export default WorkExperienceForm;
