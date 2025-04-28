import axios from "axios";
import { API_URL } from "./urls";

export const axiosInstance = axios.create({
    baseURL: `${API_URL}/v1`,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token =
            localStorage.getItem("token") || sessionStorage.getItem("token"); // or sessionStorage, or cookies
        const currentPath = window.location.pathname;

        if (token && ["/", "/login", "/register", ""].includes(currentPath)) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        console.log("Request made with ", config);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor (optional: for token expired handling)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Token expired or invalid
            console.error("Unauthorized! Maybe token expired.");
            // Optionally, redirect to login page:
            // window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);
