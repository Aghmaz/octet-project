import React from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addReference, updateReference, deleteReference } from '../redux/Resume_slice';
import DeleteIcon from '@mui/icons-material/Delete';

const ReferencesForm = () => {
  const dispatch = useDispatch();
  const references = useSelector((state) => state.resume.references);

  const handleChange = (index, field, value) => {
    dispatch(updateReference({ index, data: { [field]: value } }));
  };

  const handleAdd = () => {
    dispatch(addReference({
      name: '',
      title: '',
      company: '',
      email: '',
    }));
  };

  const handleDelete = (index) => {
    dispatch(deleteReference(index));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold">References</h2>
          <p className="text-sm text-gray-600">Add professional references</p>
        </div>
        <Button variant="outlined" onClick={handleAdd} startIcon={<span>+</span>}>
          Add Reference
        </Button>
      </div>

      {references.map((item, index) => (
        <div key={index} className="border rounded-lg p-4 space-y-4 relative">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Reference {index + 1}</h3>
            <IconButton onClick={() => handleDelete(index)} size="small">
              <DeleteIcon />
            </IconButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              label="Name"
            
              onChange={(e) => handleChange(index, 'name', e.target.value)}
              fullWidth
            />
            <TextField
              label="Title"
              
              onChange={(e) => handleChange(index, 'title', e.target.value)}
              fullWidth
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextField
              label="Company"
              
              onChange={(e) => handleChange(index, 'company', e.target.value)}
              fullWidth
            />
            <TextField
              label="Email"
             
              onChange={(e) => handleChange(index, 'email', e.target.value)}
              fullWidth
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReferencesForm;
