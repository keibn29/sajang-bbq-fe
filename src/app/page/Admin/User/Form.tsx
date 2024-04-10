import { LockOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Col, Form, FormProps, Input, Row, Select } from 'antd';

const UserForm = (props: FormProps) => {
  const { form } = props;

  return (
    <Form form={form} initialValues={{ remember: true }} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
      <Row gutter={[10, 0]}>
        <Col span={24}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your Email!' },
              { type: 'email', message: 'Email is not valid!' },
            ]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Input your email"
              allowClear
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Input your password"
              allowClear
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Repeat password"
            name="rePassword"
            rules={[{ required: true, message: 'Please repeat your Password!' }]}
          >
            <Input
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Repeate your password"
              allowClear
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="First name"
            name="firstName"
            rules={[{ required: true, message: 'Please input your first name!' }]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Input your first name"
              allowClear
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Last name"
            name="lastName"
            rules={[{ required: true, message: 'Please input your last name!' }]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Input your last name"
              allowClear
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Phone number"
            name="phone"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input
              size="large"
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              placeholder="Input your phone number"
              allowClear
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Role"
            name="role"
            initialValue="NORMAL"
            rules={[{ required: true, message: 'Please select user role!' }]}
          >
            <Select
              options={[
                { value: 'ADMIN', label: 'Admin' },
                { value: 'NORMAL', label: 'Normal' },
              ]}
              size="large"
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default UserForm;
