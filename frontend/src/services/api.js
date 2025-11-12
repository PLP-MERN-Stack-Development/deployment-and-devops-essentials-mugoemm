import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.error || error.message || 'Request failed';
    return Promise.reject(new Error(message));
  },
);

export const api = {
  async getUsers() {
    const { data } = await client.get('/users');
    return data;
  },
  async createUser(payload) {
    const { data } = await client.post('/users', payload);
    return data;
  },
  async deleteUser(id) {
    await client.delete(`/users/${id}`);
  },
};

