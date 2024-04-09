import { message } from 'antd';

export const getBase64 = (img: any, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

export const isValisBeforeUpload = (file: any) => {
  const isJpgOrPng = file?.type === 'image/jpeg' || file?.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }

  return isJpgOrPng;
};
