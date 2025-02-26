import axios, { AxiosInstance } from "axios";

export const apiClient: AxiosInstance = axios.create({
  baseURL: "/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
