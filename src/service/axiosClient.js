import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const axiosClient = axios.create({
    baseURL: baseURL,
});

export default axiosClient;