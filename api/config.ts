import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const clientManagementInstance = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE,
  });

  axiosInstance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      try {
        return config;
      } catch (error) {
        console.error("Error fetching session:", error);
        return config;
      }
    },
    (error: Error) => Promise.reject(error)
  );

  return axiosInstance;
};

export default clientManagementInstance;
