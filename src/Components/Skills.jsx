import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addSkill } from '../redux/Resume_slice';

const SkillsForm = () => {
  const dispatch = useDispatch();
  const [skill, setSkill] = useState('');

  const handleAdd = () => {
    if (skill.trim()) {
      dispatch(addSkill(skill));
      setSkill('');
    }
  };

  return (
    <div className="space-y-4">
      <TextField label="Skill" value={skill} onChange={(e) => setSkill(e.target.value)} fullWidth />
      <Button variant="contained" onClick={handleAdd}>Add Skill</Button>
    </div>
  );
};

export default SkillsForm;
