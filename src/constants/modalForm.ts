import UserModal from 'app/page/Admin/User/Form';
import { DynamicKeyObject } from 'model';

export const modalFormConfig: DynamicKeyObject = {
  user: {
    title: 'Người dùng',
    apiPath: '/user',
    formElement: UserModal,
  },
};
