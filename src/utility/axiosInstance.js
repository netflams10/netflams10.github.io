import axios from "axios";

const baseURL = import.meta.env.BASE_URL;

// console.log(import.meta.env.DEV ? "" : "");

const axiosInstance = axios.create({
  baseURL,
  timeout: 1000,
  headers: { Accept: "application/json" },
});

export default axiosInstance;
