import { notification } from 'antd';
import axios, { AxiosRequestConfig } from 'axios';
import { defaultTo, get } from 'lodash';
import { v4 as uuidv4 } from 'uuid';

export const instanceAxios = axios.create();

instanceAxios.defaults.baseURL = import.meta.env.VITE_API_ENPOINT;
instanceAxios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8';
instanceAxios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
instanceAxios.defaults.headers.common['x-requestid'] = uuidv4();

instanceAxios.interceptors.response.use(
  (response) => {
    if (response.data.code && +response.data.code !== 200) {
      return Promise.reject(response);
    }
    return response;
  },
  (error) => {
    if (!axios.isCancel(error)) {
      const message = defaultTo(get(error, 'message'), 'ERROR');
      notification.error({ message });
    }

    return Promise.reject(error);
  }
);

export default function request(options: AxiosRequestConfig) {
  return instanceAxios(options);
}
