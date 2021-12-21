import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

export default apiClient;
