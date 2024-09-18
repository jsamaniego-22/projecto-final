// src/axiosInstance.js
import axios from 'axios';

// Configura la instancia de Axios con una URL base
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/', // Reemplaza con la URL de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
