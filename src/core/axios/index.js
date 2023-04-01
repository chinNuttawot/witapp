import axios from "axios";
import AppSettings from "../appSettings.json";


const client = axios.create();

const { enableLog } = AppSettings.axios;

client.interceptors.response.use(
  (res) => {
    if (enableLog
    ) {
      console.log("axios success", res);
      
    }
    return res;
  },
  (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      emitter.emit("on-error", { code: 401, message: error.response });

      
      return Promise.reject(error);
    } else if (
      error.response &&
      error.response.status === 403 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      emitter.emit("on-error", { code: 403, message: error.response });

      
      return Promise.reject(error);
    } else {
      console.log("axios error:", error);
    }
  }
);

export default client;
