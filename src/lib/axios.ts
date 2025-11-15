import config from "@/config";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: config.apiBaseUrl,
  withCredentials: true,
});
