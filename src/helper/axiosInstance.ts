import axios from 'axios';

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://holuweb.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to attach token
axiosInstance.interceptors.request.use(
  (config) => {
    // Check if running in browser environment
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = Bearer ${token};
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
