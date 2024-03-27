import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

function Login() {
  const handleLogin = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div>
      <h1 className="text-center mb-5">LOGIN</h1>
      <Form name="normal_login" className="w-[350px]" initialValues={{ remember: true }} onFinish={handleLogin}>
        <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" allowClear />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            allowClear
          />
        </Form.Item>
        <Form.Item>
          <a className="float-right" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Login
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
