import React from 'react';
import { TextField, Button, IconButton, Checkbox, FormControlLabel } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addWork, updateWork, deleteWork } from '../redux/Resume_slice';
import DeleteIcon from '@mui/icons-material/Delete';

const WorkExperienceForm = () => {
  const dispatch = useDispatch();
  const work = useSelector((state) => state.resume.work);

  const handleChange = (index, field, value) => {
    dispatch(updateWork({ index, data: { [field]: value } }));
  };

  const handleAdd = () => {
    dispatch(addWork({
      position: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      isPresent: false,
      description: '',
    }));
  };

  const handlePresentToggle = (index, checked) => {
    dispatch(updateWork({ 
      index, 
      data: { 
        isPresent: checked,
        endDate: checked ? 'Present' : ''
      } 
    }));
  };

  const handleDelete = (index) => {
    dispatch(deleteWork(index));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">Work Experience</h2>
          <p className="text-sm text-gray-600">Add your professional experience</p>
        </div>
        <Button variant="outlined" onClick={handleAdd} startIcon={<span>+</span>}>
          Add Experience
        </Button>
      </div>

      {work.map((item, index) => (
        <div key={index} className="border rounded-lg p-4 space-y-4 relative">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Experience {index + 1}</h3>
            <IconButton onClick={() => handleDelete(index)} size="small">
              <DeleteIcon />
            </IconButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              label="Position"
              value={item.position || ''}
              onChange={(e) => handleChange(index, 'position', e.target.value)}
              fullWidth
            />
            <TextField
              label="Company"
              value={item.company || ''}
              onChange={(e) => handleChange(index, 'company', e.target.value)}
              fullWidth
            />
          </div>

          <TextField
            label="Location"
            value={item.location || ''}
            onChange={(e) => handleChange(index, 'location', e.target.value)}
            fullWidth
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              label="Start Date"
              type="date"
              value={item.startDate || ''}
              onChange={(e) => handleChange(index, 'startDate', e.target.value)}
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="End Date"
              type="date"
              value={item.isPresent ? '' : item.endDate || ''}
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
            label="I currently work here"
          />

          <TextField
            label="Description"
            value={item.description || ''}
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

export default WorkExperienceForm;
