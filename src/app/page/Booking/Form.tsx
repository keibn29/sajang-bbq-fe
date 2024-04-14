import { InfoCircleFilled, UserOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Form, Modal, Row, Select, Tooltip, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { processGetQuery, processPostQuery } from 'api';
import dayjs from 'dayjs';
import { DynamicKeyObject } from 'model';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'store';
import { selectUser } from 'store/authSlice';

const BookingForm = (props: { isOpen: boolean; onClose: () => void; branch: DynamicKeyObject }) => {
  const { isOpen, branch, onClose } = props;
  const user = useAppSelector(selectUser);
  const [form] = useForm();
  const [schedules, setSchedules] = useState<any>([]);
  const [params, setParams] = useState<DynamicKeyObject>({
    table: 1,
    date: moment().format('DD/MM/YYYY'),
    scheduleId: null,
    customerId: user?.id,
    branchId: branch?.id,
  });

  const handleSubmitForm = () => {
    const { scheduleId, customerId, branchId } = params;
    if (!scheduleId || !customerId || !branchId) {
      message.error('Vui lòng bổ sung đầy đủ thông tin');
      return;
    }
    processPostQuery('/booking', params).then(() => {
      handleCloseModal();
      message.success('Đặt bàn thành công');
    });
  };

  const handleCloseModal = () => {
    onClose();
    form.resetFields();
  };

  useEffect(() => {
    processGetQuery('/schedule').then((data) => setSchedules(data.schedules));
  }, []);

  useEffect(() => {
    setParams((prev) => ({ ...prev, branchId: branch?.id }));
  }, [branch]);

  return (
    <Modal
      title="Đặt bàn"
      centered
      open={isOpen}
      width={600}
      onOk={handleSubmitForm}
      onCancel={handleCloseModal}
      maskClosable={false}
    >
      <Form
        form={form}
        initialValues={{ remember: false }}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        size="small"
      >
        <Row gutter={[10, 0]}>
          <Col span={12}>
            <Form.Item
              label="Số bàn muốn đặt"
              name="table"
              initialValue={params.table}
              rules={[{ required: true, message: 'Please select number table!' }]}
            >
              <div className="relative">
                <Tooltip
                  color="white"
                  overlayClassName="custom-tooltip"
                  title={
                    <div className="w-full flex justify-center items-center text-black h-10">
                      <div className="px-2">
                        <p className="text-center text-sm my-[15px]">1 bàn tối đa 4 người</p>
                      </div>
                    </div>
                  }
                  placement="right"
                  trigger={['hover']}
                  overlayStyle={{
                    maxWidth: 'none',
                  }}
                >
                  <InfoCircleFilled className="text-primary text-sm absolute top-[-20px] right-[132px]" />
                </Tooltip>
              </div>
              <Select
                size="large"
                suffixIcon={<UserOutlined className="site-form-item-icon" />}
                defaultValue={1}
                options={[
                  { value: 1, label: '1 bàn' },
                  { value: 2, label: '2 bàn' },
                  { value: 3, label: '3 bàn' },
                ]}
                onChange={(value) => setParams((prev) => ({ ...prev, table: value }))}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Thời gian dùng bữa"
              name="date"
              initialValue={dayjs(params.date, 'DD/MM/YYYY')}
              rules={[{ required: true, message: 'Please select date!' }]}
            >
              <DatePicker
                className="w-full"
                format="DD/MM/YYYY"
                size="large"
                onChange={(date, dateString) => setParams((prev) => ({ ...prev, date: dateString }))}
              />
            </Form.Item>
          </Col>
          <Col span={24} className="!px-0">
            <Form.Item className="mb-3" name="scheduleId">
              <Row>
                {schedules.map((schedule: DynamicKeyObject) => (
                  <Col key={schedule.id} span={6} className="p-1">
                    <Button
                      size="large"
                      type={params.scheduleId === schedule.id ? 'primary' : 'default'}
                      className="w-full"
                      onClick={() => setParams((prev) => ({ ...prev, scheduleId: schedule.id }))}
                    >
                      {schedule.time}
                    </Button>
                  </Col>
                ))}
              </Row>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Món ăn kèm">
              <Select
                size="large"
                mode="multiple"
                defaultValue={['lucy']}
                placeholder="Borderless"
                style={{ flex: 1 }}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                ]}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default BookingForm;
