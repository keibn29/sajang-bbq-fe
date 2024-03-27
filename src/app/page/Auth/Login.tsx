import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useAppDispatch } from 'store';
import { IPayloadLogin, actionLogin } from 'store/authSlice';

interface IProps {
  onSignup: () => void;
}

function Login(props: Readonly<IProps>) {
  const { onSignup } = props;
  const dispatch = useAppDispatch();

  const handleLogin = (values: IPayloadLogin) => {
    dispatch(actionLogin(values));
    console.log('values', values);
  };

  return (
    <div>
      <h1 className="text-center mb-5">LOGIN</h1>
      <Form
        name="normal_login"
        className="w-[400px]"
        initialValues={{ remember: true }}
        onFinish={handleLogin}
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
        <Form.Item>
          <span className="text-link select-none cursor-pointer float-right">Forgot password</span>
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large" htmlType="submit" className="w-full mb-1">
            Login
          </Button>
          Or{' '}
          <span className="text-link select-none cursor-pointer" onClick={onSignup}>
            register now!
          </span>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
