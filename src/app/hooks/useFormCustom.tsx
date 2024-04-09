import { notification } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { processPostQuery, processPutQuery } from 'api';
import { cloneDeep } from 'lodash';
import { useAppDispatch, useAppSelector } from 'store';
import { actionUpdateAppPagination, selectAppPagination } from 'store/appSlice';
import { loading } from 'utils/app';

interface IProps {
  apiPath: string;
  onClose: () => void;
  editedRowId?: number;
}

function useFormCustom(props: IProps) {
  const { apiPath, editedRowId, onClose } = props;
  const dispatch = useAppDispatch();
  const page = useAppSelector(selectAppPagination);
  const [form] = useForm();

  const onSubmitForm = () => {
    form
      .validateFields()
      .then((values) => {
        loading.on();
        const url = !editedRowId ? apiPath : `${apiPath}/${editedRowId}`;
        const queryFn = !editedRowId ? processPostQuery : processPutQuery;
        queryFn(url, values).then(() => {
          onClose();
          notification.success({ message: 'Cập nhật thông tin thành công' });
          dispatch(actionUpdateAppPagination(cloneDeep(page)));
        });
      })
      .catch(() => Promise.resolve());
  };

  return { form, onSubmitForm };
}

export default useFormCustom;
