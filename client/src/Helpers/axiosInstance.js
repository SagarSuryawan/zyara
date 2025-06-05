import axios from "axios";

const BASE_URL = "https://localhost:5173/api/v1"; // Replace with your API base URL

const axiosInstance = axios.create()

axiosInstance.defaults.BASE_URL = BASE_URL;
axiosInstance.defaults.withCredentials = true; // Enable cookies to be sent with requests


export default axiosInstance