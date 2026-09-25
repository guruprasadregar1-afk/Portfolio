import axios from 'axios';
import API_URL from '../config/api';

const api = axios.create({
  baseURL: `${API_URL}/api`,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});


// ─── Contact API ────────────────────────────────────────────────────
export const sendContactMessage = async (formData) => {
  const response = await api.post('/contact', formData);
  return response.data;
};

// ─── Resume API ─────────────────────────────────────────────────────
export const downloadResume = async () => {
  const link = document.createElement('a');
  link.href = '/Guru_Prasad_Resume.pdf';
  link.setAttribute('download', 'Guru_Prasad_Resume.pdf');
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export const getResumeInfo = async () => {
  const response = await api.get('/resume');
  return response.data;
};

export default api;
