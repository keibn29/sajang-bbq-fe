import { Button, Flex } from 'antd';
import { URL } from 'constants/url';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store';
import { actionLogout } from 'store/authSlice';

const menus = [
  {
    text: 'Trang chủ',
    url: URL.home,
  },
  {
    text: 'Địa điểm',
    url: URL.address,
  },
  {
    text: 'Menu',
    url: URL.menu,
  },
  {
    text: 'Ưu đãi',
    url: URL.sale,
  },
  {
    text: 'Blog',
    url: URL.blog,
  },
  {
    text: 'Gallery',
    url: URL.gallery,
  },
  {
    text: 'Liên hệ',
    url: URL.contact,
  },
  {
    text: 'Login',
    url: URL.login,
  },
];

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(actionLogout());
    navigate(URL.login);
  };

  return (
    <div className="h-[70px] shadow-lg w-full fixed top-0 z-[99] bg-white">
      <Flex className="max-w-[1425px] h-[100%] px-[90px] mx-auto" justify="space-between" align="center">
        <Link to={URL.home} className="bg-logo bg-cover bg bg-center w-[100px] h-[50px]" />
        <div>
          {menus.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              className="font-bold uppercase cursor-pointer p-[20px] hover:text-primary text-[#3c2311]"
            >
              <span>{item.text}</span>
            </Link>
          ))}
        </div>
        <Button onClick={handleLogout}>Log out</Button>
      </Flex>
    </div>
  );
};

export default Header;
