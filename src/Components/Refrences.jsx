import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addReference } from '../redux/Resume_slice';

const ReferencesForm = () => {
  const dispatch = useDispatch();
  const [ref, setRef] = useState({ name: '', contact: '' });

  const handleChange = (e) => {
    setRef({ ...ref, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    dispatch(addReference(ref));
    setRef({ name: '', contact: '' });
  };

  return (
    <div className="space-y-4">
      <TextField label="Name" name="name" value={ref.name} onChange={handleChange} fullWidth />
      <TextField label="Contact" name="contact" value={ref.contact} onChange={handleChange} fullWidth />
      <Button variant="contained" onClick={handleAdd}>Add Reference</Button>
    </div>
  );
};

export default ReferencesForm;
