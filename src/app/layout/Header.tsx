import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import { Flex, Menu, Select, Space } from 'antd';
import useHeaderStyle from 'app/hooks/useHeaderStyle';
import { menuItems } from 'constant/nav';
import { URL } from 'constant/url';
import Logo from 'images/logo.svg?react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const { headerBackgroundColor, headerClassName } = useHeaderStyle();

  return <></>;
};

export default Header;
