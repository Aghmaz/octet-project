import React from 'react';
import { TextField, Button, IconButton, Checkbox, FormControlLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addEducation, updateEducation, deleteEducation } from '../redux/Resume_slice';
import DeleteIcon from '@mui/icons-material/Delete';

const EducationForm = () => {
  const dispatch = useDispatch();
  const education = useSelector((state) => state.resume.education);

  const handleChange = (index, field, value) => {
    dispatch(updateEducation({ index, data: { [field]: value } }));
  };

  const handleAdd = () => {
    dispatch(addEducation({
      degree: '',
      institution: '',
      location: '',
      startDate: '',
      endDate: '',
      isPresent: false,
      description: '',
    }));
  };

  const handlePresentToggle = (index, checked) => {
    dispatch(updateEducation({ 
      index, 
      data: { 
        isPresent: checked,
        endDate: checked ? 'Present' : ''
      } 
    }));
  };

  const handleDelete = (index) => {
    dispatch(deleteEducation(index));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Education</h2>
          <p className="text-sm text-gray-600">Add your educational background</p>
        </div>
        <Button variant="outlined" onClick={handleAdd} startIcon={<span>+</span>}>
          Add Education
        </Button>
      </div>

      {education.map((item, index) => (
        <div key={index} className="border rounded-lg p-4 space-y-4 relative">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Education {index + 1}</h3>
            <IconButton onClick={() => handleDelete(index)} size="small">
              <DeleteIcon />
            </IconButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              label="Degree"
            
              onChange={(e) => handleChange(index, 'degree', e.target.value)}
              fullWidth
            />
            <TextField
              label="Institution"
             
              onChange={(e) => handleChange(index, 'institution', e.target.value)}
              fullWidth
            />
          </div>

          <TextField
            label="Location"
            
            onChange={(e) => handleChange(index,  e.target.value)}
            fullWidth
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              label="Start Date"
              type="date"
             
              onChange={(e) => handleChange(index, 'startDate', e.target.value)}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="End Date"
              type="date"
       
              onChange={(e) => handleChange(index, 'endDate', e.target.value)}
              fullWidth
              disabled={item.isPresent}
              InputLabelProps={{ shrink: true }}
            />
          </div>

          <FormControlLabel
            control={
              <Checkbox
                checked={item.isPresent || false}
                onChange={(e) => handlePresentToggle(index, e.target.checked)}
              />
            }
            label="I currently study here"
          />

          <TextField
            label="Description"
           
            onChange={(e) => handleChange(index, 'description', e.target.value)}
            fullWidth
            multiline
            minRows={3}
          />
        </div>
      ))}
    </div>
  );
};

export default EducationForm;
