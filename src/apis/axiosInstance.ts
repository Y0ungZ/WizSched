import axios, { AxiosError, CreateAxiosDefaults, InternalAxiosRequestConfig } from 'axios';

const instanceConfig: CreateAxiosDefaults = {
  baseURL: process.env.VITE_GOOGLE_CALENDAR_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};

const instance = axios.create(instanceConfig);

const setAccessToken = (token: string | null) => {
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );
};

export { instance, setAccessToken };
