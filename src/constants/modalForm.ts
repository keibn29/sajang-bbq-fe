import BranchForm from 'app/page/Admin/Branch/Form';
import UserForm from 'app/page/Admin/User/Form';
import BookingForm from 'app/page/Booking/Form';
import { IModalForm } from 'store/appSlice';

export type IModalConfigKey = 'user' | 'branch' | 'dish' | 'blog' | 'booking';

export const modalFormConfig: { [key in IModalConfigKey]: IModalForm } = {
  user: {
    title: 'Người dùng',
    apiPath: '/user',
    formElement: UserForm,
  },
  branch: {
    title: 'Chi nhánh',
    apiPath: '/branch',
    formElement: BranchForm,
  },
  dish: {
    title: 'Món ăn',
    apiPath: '/dish',
    formElement: BranchForm,
  },
  blog: {
    title: 'Bài đăng',
    apiPath: '/blog',
    formElement: BranchForm,
  },
  booking: {
    title: 'Đặt bàn',
    apiPath: '/booking',
    width: 600,
    formElement: BookingForm,
  },
};
