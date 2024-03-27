import { Modal } from 'antd';
import { useAppDispatch, useAppSelector } from 'store';
import { actionCloseAppConfirmation, selectAppConfirmation } from 'store/appSlice';
import ButtonCustom from '../custom/ButtonCustom';

function AppConfirmation() {
  const { isOpen, type, message, title, onCancel, onSubmit } = useAppSelector(selectAppConfirmation);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(actionCloseAppConfirmation());
  };

  const handleSubmit = () => {
    onSubmit && onSubmit();
    handleClose();
  };

  const handleCancel = () => {
    onCancel && onCancel();
    handleClose();
  };

  return (
    <Modal
      title={title}
      open={isOpen}
      width={400}
      onCancel={handleClose}
      footer={
        type === 'single' ? (
          <ButtonCustom text="Xác nhận" className="p-3" onClick={handleSubmit} />
        ) : (
          <div className="flex justify-end">
            <ButtonCustom text="Hủy" className="!p-3 bg-secondary hover:bg-secondary-hover" onClick={handleCancel} />
            <ButtonCustom text="Xác nhận" className="!p-3" onClick={handleSubmit} />
          </div>
        )
      }
    >
      <p>{message}</p>
    </Modal>
  );
}

export default AppConfirmation;
