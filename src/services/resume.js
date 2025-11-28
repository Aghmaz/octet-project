import axios from 'axios';

const API_URL_RESUME = 'http://localhost:5000/api/resume';

// Create axios instance with credentials
const api = axios.create({
  baseURL:  API_URL_RESUME,
  withCredentials: true, // Important for cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

  export const resumeAPI = {
  createResume: async (resumeData) => {
    const response = await api.post('/create', resumeData);
    return response.data;
  },

  getResume: async (id) => {
          const response = await api.get(`/get/${id}`);
    return response.data;
  },
};
export default resumeAPI;

