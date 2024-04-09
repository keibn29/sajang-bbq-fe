import { DynamicKeyObject } from 'model';
import request from 'utils/request';

export const processGetQuery = async (url: string, params: DynamicKeyObject) => {
  return request({
    url,
    method: 'GET',
    params,
  }).then((res) => res.data);
};

export const processPostQuery = async (url: string, data: any) => {
  return request({
    url,
    method: 'POST',
    data,
  }).then((res) => res.data);
};

export const processPutQuery = async (url: string, data: any) => {
  return request({
    url,
    method: 'PUT',
    data,
  }).then((res) => res.data);
};

export const processDeleteQuery = async (url: string) => {
  return request({
    url,
    method: 'DELETE',
  }).then((res) => res.data);
};
