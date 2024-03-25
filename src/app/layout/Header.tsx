import { Flex } from 'antd';
import { Link } from 'react-router-dom';

const menus = [
  {
    text: 'Trang chu',
    url: '/',
  },
  {
    text: 'Dia diem',
    url: '/address',
  },
  {
    text: 'Menu',
    url: '/menu',
  },
  {
    text: 'Uu dai',
    url: '/sale',
  },
  {
    text: 'Blog',
    url: '/blog',
  },
  {
    text: 'Gallery',
    url: '/gallery',
  },
  {
    text: 'Lien he',
    url: '/contact',
  },
];

const Header = () => {
  return (
    <div className="h-[70px] shadow-lg w-full fixed top-0 z-[99] bg-white">
      <Flex className="max-w-[1425px] h-[100%] px-[90px] mx-auto" justify="space-between" align="center">
        <Link to={'/'} className="bg-logo bg-cover bg bg-center w-[100px] h-[50px]" />
        <div>
          {menus.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              className="font-bold uppercase cursor-pointer p-[20px] hover:text-primary"
            >
              <span>{item.text}</span>
            </Link>
          ))}
        </div>
      </Flex>
    </div>
  );
};

export default Header;
