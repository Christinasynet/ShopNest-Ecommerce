import axios from "axios";

const api = axios.create({
  baseURL: "https://shopnest-backend-scxi.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
