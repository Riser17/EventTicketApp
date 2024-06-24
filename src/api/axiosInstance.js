import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";

import { BASE_URL } from "./endPoints";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  //   timeout: 10000,
});

// // Add an interceptor to modify the request headers
// axiosInstance.interceptors.request.use(
//   async (config) => {
//     // Retrieve the bearer token from AsyncStorage
//     const token = await AsyncStorage.getItem("AuthAccessToken");

//     // Set the Authorization header if the token exists
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
