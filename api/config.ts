import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const clientManagementInstance = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL:
      "http://157.230.240.97:9999/api/v1",
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
