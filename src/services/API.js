import axios from 'axios';

const headers = () => {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };
};

const API = () => {
  const axiosInstance = axios.create({
    headers: headers(),
  });

  return axiosInstance;
};

export default API;
