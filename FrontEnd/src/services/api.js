import axios from 'axios';

// Khởi tạo instance axios trỏ về Strapi backend
const api = axios.create({
  baseURL: 'http://localhost:1337/api',
  timeout: 10000,
});

export default api;
