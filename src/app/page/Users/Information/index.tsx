import { UserOutlined } from '@ant-design/icons';

import { Avatar, Button, Col, Form, Input, Row } from 'antd';

const UserInformation = () => {
  return (
    <>
      <p className="font-bold text-xl">Thông tin tài khoản</p>
      <Avatar size={64} icon={<UserOutlined />} />
      <Form initialValues={{ remember: true }} labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
        <Row gutter={[10, 0]}>
          <Col span={12}>
            <Form.Item label="Email" name="email">
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Input your email"
                allowClear
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Số điện thoại" name="password">
              <Input size="large" type="password" placeholder="Input your password" allowClear />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="First name" name="firstName">
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Input your first name"
                allowClear
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Last name" name="lastName">
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Input your last name"
                allowClear
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Địa chỉ" name="rePassword">
              <Input size="large" type="password" placeholder="Repeate your password" allowClear />
            </Form.Item>
          </Col>

          <Button type="primary" size="large" htmlType="submit" className="w-full mb-1">
            Lưu thay đổi
          </Button>
        </Row>
      </Form>
    </>
  );
};

export default UserInformation;
