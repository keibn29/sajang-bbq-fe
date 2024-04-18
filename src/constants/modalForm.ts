import BlogForm from 'app/page/Admin/Blog/Form';
import BranchForm from 'app/page/Admin/Branch/Form';
import GalleryForm from 'app/page/Admin/Gallery/Form';
import UserForm from 'app/page/Admin/User/Form';
import { IModalForm } from 'store/appSlice';

export type IModalConfigKey = 'user' | 'branch' | 'dish' | 'blog' | 'gallery';

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
    formElement: BlogForm,
  },
  gallery: {
    title: 'Ảnh trưng bày',
    apiPath: '/gallery',
    formElement: GalleryForm,
  },
};
