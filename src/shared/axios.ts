import axios, { AxiosInstance } from 'axios';
import config from '../config';

const HttpService = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  });

  instance.interceptors.request.use(
    (config) => config,
    (error) => error
  );

  instance.interceptors.response.use(
    (res) => res.data,
    (error) => Promise.reject(error)
  );

  return instance;
};

const AuthService = HttpService(config.authService);
const CoreService = HttpService(config.coreService);

export { AuthService, CoreService, HttpService };
