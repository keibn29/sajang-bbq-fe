import { InfoCircleFilled, UserOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, DatePickerProps, Form, Row, Select, Tooltip } from 'antd';
import { processGetQuery } from 'api';
import { DynamicKeyObject, IFormProps } from 'model';
import { useEffect, useState } from 'react';

const BookingForm = (props: IFormProps) => {
  const { form } = props;
  const [schedules, setSchedules] = useState<any>([]);
  const [selectedSchedule, setSelectedSchedule] = useState<DynamicKeyObject>({});

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  useEffect(() => {
    processGetQuery('/schedule').then((data) => setSchedules(data.schedules));
  }, []);

  useEffect(() => {
    form?.setFieldValue('schedule', selectedSchedule.id);
  }, [selectedSchedule]);

  console.log('first', form?.getFieldsValue());

  return (
    <Form form={form} initialValues={{ remember: true }} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} size="small">
      <Row gutter={[10, 0]}>
        <Col span={12}>
          <Form.Item
            label="Số bàn muốn đặt"
            name="table"
            initialValue="1"
            rules={[{ required: true, message: 'Please select number table!' }]}
          >
            <div className="relative">
              <Select
                size="large"
                defaultValue={'1'}
                suffixIcon={<UserOutlined className="site-form-item-icon" />}
                options={[
                  { value: '1', label: '1 bàn' },
                  { value: '2', label: '2 bàn' },
                  { value: '3', label: '3 bàn' },
                ]}
              />
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
                <InfoCircleFilled className="text-primary text-sm absolute top-[-18px] right-[132px]" />
              </Tooltip>
            </div>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Thời gian dùng bữa"
            name="date"
            rules={[{ required: true, message: 'Please select date!' }]}
          >
            <DatePicker className="w-full" size="large" onChange={onChange} />
          </Form.Item>
        </Col>
        <Row className="mb-3">
          {schedules.map((schedule: DynamicKeyObject) => (
            <Col key={schedule.id} span={6} className="p-1">
              <Button
                size="large"
                type={selectedSchedule === schedule.id ? 'primary' : 'default'}
                className="w-full"
                onClick={() => setSelectedSchedule(schedule.id)}
              >
                {schedule.time}
              </Button>
            </Col>
          ))}
        </Row>
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
  );
};

export default BookingForm;
