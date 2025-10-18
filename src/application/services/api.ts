import axios from 'axios';
import { StorageAdapter } from '../adapters/storage';
import Config from 'react-native-config';

console.log('API_URL', Config.API_URL);

const api = axios.create({
  baseURL: 'https://dummyjson.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(config => {
  const token = StorageAdapter.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(response => {
  return response;
});

export { api };
