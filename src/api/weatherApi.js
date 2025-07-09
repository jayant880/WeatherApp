import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const weatherApi = axios.create({
    baseURL: "https://api.weatherapi.com/v1",
    params: {
        key: API_KEY
    },
    timeout: 5000
});

weatherApi.interceptors.response.use(
    response => response.data,
    error => {
        console.error('Weather API error', error);

        if (error.message) {
            const message = error.response.data?.error?.message || 'API error';
            return Promise.reject(new Error(message));
        } else if (error.request) {
            return Promise.reject(new Error('NetWork error - please check your connection'));
        } else {
            return Promise.reject(new Error('An unexpected error occured'));
        }
    }
);

export default weatherApi;