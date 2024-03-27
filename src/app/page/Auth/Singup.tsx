import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
import { Form, Input, Button, Row, Col } from 'antd';

interface IProps {
  onLogin: () => void;
}

function Singup(props: Readonly<IProps>) {
  const { onLogin } = props;

  const handleSignup = (values: any) => {
    ///
  };

  return (
    <div>
      <div>
        <h1 className="text-center mb-5">SIGNUP</h1>
        <Form
          name="normal_login"
          className="w-[450px]"
          initialValues={{ remember: true }}
          onFinish={handleSignup}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
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
          <Row gutter={[10, 0]}>
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
          </Row>
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
          <Form.Item>
            <Button type="primary" size="large" htmlType="submit" className="w-full mb-1">
              Signup
            </Button>
            Or{' '}
            <span className="text-link select-none cursor-pointer" onClick={onLogin}>
              login now!
            </span>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Singup;
