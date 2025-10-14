import React, { useState } from 'react';
import { TextField, Button, Chip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addSkill, deleteSkill } from '../redux/Resume_slice';

const SkillsForm = () => {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.resume.skills);
  const [skill, setSkill] = useState('');

  const handleAdd = () => {
    if (skill.trim()) {
      dispatch(addSkill(skill));
      setSkill('');
    }
  };

  const handleDelete = (index) => {
    dispatch(deleteSkill(index));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Skills</h2>
        <p className="text-sm text-gray-600">Add your professional skills</p>
      </div>

      <div className="flex gap-2">
        <TextField
          label="Enter a skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          onKeyPress={handleKeyPress}
          fullWidth
        />
        <Button variant="outlined" onClick={handleAdd} sx={{ minWidth: '100px' }}>
          +
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((item, index) => (
          <Chip
            key={index}
            label={item}
            onDelete={() => handleDelete(index)}
            variant="outlined"
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsForm;
