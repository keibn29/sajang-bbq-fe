import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Layout, Menu, theme } from 'antd';
import AvatarImage from 'assets/images/concept.jpg';
import { URL } from 'constants/url';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getPageName } from 'utils/app';

const { Header, Sider, Content } = Layout;

interface IProps {
  children: JSX.Element;
}

const menu = [
  {
    key: 'admin',
    icon: <UserOutlined />,
    label: <Link to={URL.admin.dashboard}>Dashboard</Link>,
  },
  {
    key: 'user',
    icon: <UserOutlined />,
    label: <Link to={URL.admin.user}>Người dùng</Link>,
  },
  {
    key: 'branch',
    icon: <UserOutlined />,
    label: <Link to={URL.admin.branch}>Chi nhánh</Link>,
  },
];

const AdminLayout = (props: IProps) => {
  const { children } = props;
  const [isCollapse, setIsCollapse] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={isCollapse}
        theme="light"
        className="border-0 border-r-[1px] border-solid border-r-[#eeeeee]"
      >
        <div className="p-[5px]">
          <div className="bg-image bg-home-concept w-full aspect-square rounded-md" />
        </div>
        <Menu mode="inline" defaultSelectedKeys={[getPageName()]} items={menu} />
      </Sider>
      <Layout>
        <Header
          className="flex justify-between items-center pr-5 pl-0"
          style={{
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setIsCollapse(!isCollapse)}
            style={{
              width: 64,
              height: 64,
            }}
            size="large"
          />
          <div className="flex items-center gap-3">
            <p className="font-bold text-base">Hello, Long</p>
            <Avatar className="cursor-pointer mr-2" size={40} src={AvatarImage} />
            <LogoutOutlined title="Logout" className="text-xl font-extrabold cursor-pointer hover:text-info" />
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            height: 'calc(100vh - 48px - 64px)',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            overflow: 'auto',
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
