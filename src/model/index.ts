import { FormInstance } from 'antd';

export interface DynamicKeyObject {
  [key: number | string]: any;
}

export interface IFormProps {
  form: FormInstance<any>;
}
