// services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');

  // Skip token for login and register
  if (!req.url.includes('/login') && !req.url.includes('/register') && token) {
    req.headers['Authorization'] = `Bearer ${token}`;
  }

  return req;
});

export default API;
