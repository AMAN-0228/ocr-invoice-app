import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors for request/response
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can add global error handling here
    return Promise.reject(error);
  }
);

export default axiosInstance;