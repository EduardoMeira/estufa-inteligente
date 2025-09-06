import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", 
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

export function getData() {
  return api.get("/data");
}

export default api;
