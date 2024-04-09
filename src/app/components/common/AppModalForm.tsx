import { Modal } from 'antd';
import useFormCustom from 'app/hooks/useFormCustom';
import { useAppSelector } from 'store';
import { selectAppModalForm } from 'store/appSlice';
import { modalForm } from 'utils/app';

const AppModalForm = () => {
  const { isOpen, title, apiPath, editedRowId, formElement: FormElement } = useAppSelector(selectAppModalForm);

  const handleCloseModal = () => {
    form.resetFields();
    modalForm.close();
  };

  const { form, onSubmitForm } = useFormCustom({
    apiPath,
    editedRowId,
    onClose: handleCloseModal,
  });

  return (
    <Modal
      title={title}
      centered
      open={isOpen}
      width={1000}
      onOk={onSubmitForm}
      onCancel={handleCloseModal}
      maskClosable={false}
    >
      {FormElement && <FormElement form={form} />}
    </Modal>
  );
};

export default AppModalForm;
