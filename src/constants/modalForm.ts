import UserModal from 'app/page/Admin/User/Form';
import BookingForm from 'app/page/Booking/Form';
import { DynamicKeyObject } from 'model';

export const modalFormConfig: DynamicKeyObject = {
  user: {
    title: 'Người dùng',
    apiPath: '/user',
    formElement: UserModal,
  },
  booking: {
    title: 'Đặt bàn',
    apiPath: '/booking',
    formElement: BookingForm,
  },
};
