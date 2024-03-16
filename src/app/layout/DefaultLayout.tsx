import { Layout, ConfigProvider } from 'antd';
import Footer from './Footer';
import Header from './Header';

interface IProps {
  children: JSX.Element;
}

const DefaultLayout = (props: IProps) => {
  const { children } = props;

  return (
    <ConfigProvider theme={{ token: { fontFamily: 'Inter, sans-serif' } }}>
      <Layout className="bg-white">
        <Header />
        {children}
        <Footer />
      </Layout>
    </ConfigProvider>
  );
};
export default DefaultLayout;
