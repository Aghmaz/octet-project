import React from 'react';
import { TextField ,Button} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonalInfo, selectTemplate } from '../redux/Resume_slice';
import resumeAPI from '../services/resume';

const PersonalInfoForm = () => {
  const dispatch = useDispatch();
  const { fullName, title, email, phone, location, about } = useSelector(
    (state) => state.resume.personalInfo
  );
  const selectedTemplate = useSelector((state) => state.resume.selectedTemplate);
  const handleChange = (e) => {
    dispatch(updatePersonalInfo({ [e.target.name]: e.target.value }));
  };
  const handleUpdate = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user._doc._id;
    const personalInfo = {
      name: fullName,
      email: email,
      phone: phone,
      address: location
    };
    const response = await resumeAPI.updateResume({userId: userId, templateName: selectedTemplate, personalInfo: personalInfo});
    if (response.success) {
      toast.success('Personal info updated successfully');
      // dispatch(updatePersonalInfo(personalInfo));
    }
  };

  return (
    <form className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <TextField  label="Full Name" name="fullName"  onChange={handleChange} fullWidth   sx={{
    "& .MuiOutlinedInput-root": {
      
      height:"55px",
     
    },
  }} />
        <TextField label="Professional Title" name="title"  onChange={handleChange} fullWidth  sx={{
    "& .MuiOutlinedInput-root": {
   
      height:"55px",
     
    },}} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField label="Email" name="email"  onChange={handleChange} fullWidth  sx={{
    "& .MuiOutlinedInput-root": {
   
      height:"55px",
     
    },}}/>
        <TextField label="Phone" name="phone" onChange={handleChange} fullWidth  sx={{
    "& .MuiOutlinedInput-root": {
  
      height:"55px",
     
    },}}/>
      </div>
      <TextField  label="Location" name="location"  onChange={handleChange} fullWidth  sx={{
    "& .MuiOutlinedInput-root": {
  
      height:"55px",
     
    },}} />
      <TextField label="About Me" name="about"  onChange={handleChange} fullWidth multiline rows={4}  sx={{
    "& .MuiOutlinedInput-root": {
       
    
     
    },}}/>
    <Button variant="contained" color="primary" onClick={handleUpdate}>Update</Button>
    </form>
  );
};

export default PersonalInfoForm;
