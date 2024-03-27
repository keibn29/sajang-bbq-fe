import { Layout } from 'antd';
import Footer from './Footer';
import Header from './Header';

interface IProps {
  children: JSX.Element;
}

const CustomerLayout = (props: IProps) => {
  const { children } = props;

  return (
    <Layout className="bg-[#F0F1F0]">
      <Header />
      {children}
      <Footer />
    </Layout>
  );
};

export default CustomerLayout;
