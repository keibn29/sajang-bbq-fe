import { notification } from 'antd';
import axios, { AxiosRequestConfig } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { loading } from './app';
import { first } from 'lodash';

export const instanceAxios = axios.create();

instanceAxios.defaults.baseURL = import.meta.env.VITE_API_ENPOINT;
instanceAxios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
instanceAxios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
instanceAxios.defaults.headers.common['x-requestid'] = uuidv4();

instanceAxios.interceptors.response.use(
  (response) => {
    setTimeout(() => {
      loading.off();
    }, 300);
    return response;
  },
  (error) => {
    loading.off();
    const message = error.response?.data?.messageVi ?? error.response?.data?.message ?? error.message;
    notification.error({ message });

    return Promise.reject(error);
  }
);

export default function request(options: AxiosRequestConfig) {
  return instanceAxios(options);
}
