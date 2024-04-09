import { message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { processPostQuery, processPutQuery } from 'api';
import { cloneDeep, keys } from 'lodash';
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

  const generateFormData = (formValues: any) => {
    const formData = new FormData();
    keys(formValues).forEach((field) => {
      formData.append(field, formValues[field]);
    });

    return formData;
  };

  const handleCallApi = (formValues: any) => {
    loading.on();
    const formData = generateFormData(formValues);
    const url = !editedRowId ? apiPath : `${apiPath}/${editedRowId}`;
    const queryFn = !editedRowId ? processPostQuery : processPutQuery;

    queryFn(url, formData, true).then(() => {
      onClose();
      message.success('Cập nhật thông tin thành công');
      dispatch(actionUpdateAppPagination(cloneDeep(page)));
    });
  };

  const onSubmitForm = () => {
    form
      .validateFields()
      .then((values) => {
        handleCallApi(values);
      })
      .catch(() => Promise.resolve());
  };

  return { form, onSubmitForm };
}

export default useFormCustom;
