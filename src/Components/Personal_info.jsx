import React from 'react';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonalInfo } from '../redux/Resume_slice';

const PersonalInfoForm = () => {
  const dispatch = useDispatch();
  const { fullName, title, email, phone, location, about } = useSelector(
    (state) => state.resume.personalInfo
  );

  const handleChange = (e) => {
    dispatch(updatePersonalInfo({ [e.target.name]: e.target.value }));
  };

  return (
    <form className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField  label="Full Name" name="fullName" value={fullName} onChange={handleChange} fullWidth   sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: "16px",   
      height:"45px",
     
    },
  }} />
        <TextField label="Professional Title" name="title" value={title} onChange={handleChange} fullWidth  sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: "16px",   
      height:"45px",
     
    },}} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField label="Email" name="email" value={email} onChange={handleChange} fullWidth  sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: "16px",   
      height:"45px",
     
    },}}/>
        <TextField label="Phone" name="phone" value={phone} onChange={handleChange} fullWidth  sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: "16px",   
      height:"45px",
     
    },}}/>
      </div>
      <TextField  label="Location" name="location" value={location} onChange={handleChange} fullWidth  sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: "16px",   
      height:"45px",
     
    },}} />
      <TextField label="About Me" name="about" value={about} onChange={handleChange} fullWidth multiline rows={4}  sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: "16px",   
    
     
    },}}/>
    </form>
  );
};

export default PersonalInfoForm;
