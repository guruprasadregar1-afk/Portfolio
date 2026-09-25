import axios from 'axios';
import API_URL from '../config/api';

const api = axios.create({
  baseURL: `${API_URL}/api`,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});


// ─── Contact API (Serverless Email Dispatch) ─────────────────────────
export const sendContactMessage = async (formData) => {
  try {
    const res = await fetch('https://formsubmit.co/ajax/guruprasadregar1@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        _subject: `[Portfolio Contact] ${formData.subject}`,
        message: formData.message,
        _captcha: 'false',
        _template: 'table'
      })
    });

    const data = await res.json();
    if (res.ok && (data.success === 'true' || data.success === true)) {
      return { success: true, message: 'Message sent successfully!' };
    }
    throw new Error(data.message || 'FormSubmit request failed');
  } catch (err) {
    console.warn('Direct HTTP email dispatch failed, using mailto fallback:', err);
    const mailtoUrl = `mailto:guruprasadregar1@gmail.com?subject=${encodeURIComponent(`[Portfolio] ${formData.subject}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    return { success: true, message: 'Opening email application...' };
  }
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
