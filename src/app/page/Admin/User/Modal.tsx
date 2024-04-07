import { Modal } from 'antd';

interface IProps {
  onClose: () => void;
}

const UserModal = (props: IProps) => {
  const { onClose } = props;

  return (
    <Modal title="Modal 1000px width" centered open={true} onOk={onClose} onCancel={onClose} width={1000}>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  );
};

export default UserModal;
