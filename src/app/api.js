import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'http://localhost:5500',
  headers: {
    'Content-Type': 'application/json'
  }
});

export { authAxios }