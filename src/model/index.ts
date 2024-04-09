import { FormProps } from 'antd';

export interface DynamicKeyObject {
  [key: number | string]: any;
}

export interface IFormProps extends FormProps {
  imageUrl: string;
  onChangeImageUrl: (base64: string) => void;
}
