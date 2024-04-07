import React, { useState } from 'react';
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Avatar } from 'antd';
import AvatarImage from 'assets/images/concept.jpg';

const { Header, Sider, Content } = Layout;

interface IProps {
  children: JSX.Element;
}

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
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Người dùng',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Chi nhánh',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Thư viện',
            },
          ]}
        />
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
