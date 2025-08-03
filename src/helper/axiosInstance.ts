import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';

// Create Axios instance with TypeScript
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://holuweb.onrender.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to attach token
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // Check if window is defined (client-side only)
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token && config.headers) {
        config.headers.Authorization = Bearer ${token};
      }
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
