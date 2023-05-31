import axios from 'axios';
import HttpErrorHandler from './HttpErrorHandler.js';

const axiosInstance = (baseURL) => {
    axios.defaults.baseURL = baseURL;
    const controller = new AbortController();

    const instance = axios.create({
        timeout: 180000, // timeout after 180 sec
        signal: controller.signal,
    });

    instance.interceptors.request.use(
        (config) => {
            if(config.headers['Content-Type'] !== "multipart/form-data") {
                config.headers['Content-Type'] = 'application/json';
            }
            if (localStorage.getItem('accessToken')) {
                const token = localStorage.getItem('accessToken');
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    instance.interceptors.response.use(
        (response) => {
            return response?.data;// write response?.data after
        },
        (error) => {
            const response_status = error?.response?.status;
            if ([401, 403].includes(response_status)) {
                HttpErrorHandler(error);
            } else {
                return Promise.reject(error);
            }
        },
    );
    return instance;
};

export default axiosInstance;