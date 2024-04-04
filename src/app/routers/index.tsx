import { lazy, ReactElement, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'app/page/NotFound';
import CustomerLayout from 'app/layout/Customer';
import { URL } from 'constants/url';
import { Admin } from 'admin';

const CUSTOMER_LAYOUT = 'customer';
const SYSTEM_LAYOUT = 'system';
const NONE_LAYOUT = 'none';

const Home = lazy(() => import('app/page/Home'));
const Login = lazy(() => import('app/page/Auth'));

interface ItemType {
  key: string;
  components: ReactElement;
  layout: string;
  private: boolean;
}

const customerItems: ItemType[] = [
  {
    key: URL.home,
    components: <Home />,
    layout: CUSTOMER_LAYOUT,
    private: false,
  },
  {
    key: URL.admin,
    components: <Admin />,
    layout: CUSTOMER_LAYOUT,
    private: false,
  },
];

const sharedItems: ItemType[] = [
  {
    key: URL.login,
    components: <Login />,
    layout: NONE_LAYOUT,
    private: false,
  },
  {
    key: '*',
    components: <NotFound />,
    layout: NONE_LAYOUT,
    private: false,
  },
];

export default function Routers() {
  const items = customerItems.concat(sharedItems);
  return (
    <Routes>
      {items.map((item) => {
        let element = item.components;

        element = <Suspense fallback={null}>{element}</Suspense>;

        if (item.layout === CUSTOMER_LAYOUT) {
          element = <CustomerLayout>{element}</CustomerLayout>;
        }

        if (item.layout === SYSTEM_LAYOUT) {
          //
        }

        return <Route key={item.key} path={item.key} element={element} />;
      })}
    </Routes>
  );
}
