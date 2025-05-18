// services/api.js

import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor: attach token only if it's not a login request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');

  if (!req.url.includes('/login') && token) {
    req.headers['Authorization'] = `Bearer ${token}`;
  }

  return req;
});

export default API;
