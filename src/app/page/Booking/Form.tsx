import { UserOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, DatePickerProps, Form, Row, Select } from 'antd';
import { IFormProps } from 'model';

const BookingForm = (props: IFormProps) => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <Form initialValues={{ remember: true }} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} size="small">
      <Row gutter={[10, 0]}>
        <Col span={24}>
          <Form.Item
            label="Số lượng người"
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Select
              suffixIcon={<UserOutlined className="site-form-item-icon" />}
              defaultValue="2 người"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: '1', label: '1 người' },
                { value: '2', label: '2 người' },
                { value: '3', label: '3 người' },
              ]}
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Thời gian dùng bữa"
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <DatePicker onChange={onChange} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item>
            <Button type="primary">11:00</Button>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item>
            <Button type="primary">12:00</Button>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item>
            <Button type="primary">13:00</Button>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item>
            <Button type="primary">14:00</Button>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item>
            <Button type="primary">15:00</Button>
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item>
            <Button type="primary">16:00</Button>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="Món ăn kèm">
            <Select
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
