// src/api/baseAPI.js
import axios from "axios";

const baseAPI = axios.create({
  baseURL: "https://bible-api.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export function handleError(error) {
  console.error("API Error:", error);
  throw error;
}

baseAPI.interceptors.request.use(
  (config) => {
    console.log("Request:", config);
    return config;
  },
  (error) => handleError(error)
);

baseAPI.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response.data;
  },
  (error) => handleError(error)
);

export default baseAPI;
