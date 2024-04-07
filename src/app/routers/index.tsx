import { lazy, ReactElement, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'app/page/NotFound';
import CustomerLayout from 'app/layout/Customer';
import { URL } from 'constants/url';
import User from 'app/page/Admin/User';
import AdminLayout from 'app/layout/Admin';

const CUSTOMER_LAYOUT = 'customer';
const ADMIN_LAYOUT = 'admin';
const NONE_LAYOUT = 'none';

const Home = lazy(() => import('app/page/Home'));
const Login = lazy(() => import('app/page/Auth'));

interface ItemType {
  key: string;
  components: ReactElement;
  layout: 'customer' | 'admin' | 'none';
}

const customerItems: ItemType[] = [
  {
    key: URL.home,
    components: <Home />,
    layout: CUSTOMER_LAYOUT,
  },
];

const adminItems: ItemType[] = [
  {
    key: URL.admin.admin,
    components: <User />,
    layout: ADMIN_LAYOUT,
  },
];

const sharedItems: ItemType[] = [
  {
    key: URL.login,
    components: <Login />,
    layout: NONE_LAYOUT,
  },
  {
    key: '*',
    components: <NotFound />,
    layout: NONE_LAYOUT,
  },
];

export default function Routers() {
  const items = customerItems.concat(adminItems, sharedItems);
  return (
    <Routes>
      {items.map((item) => {
        let element = item.components;

        element = <Suspense fallback={null}>{element}</Suspense>;

        if (item.layout === CUSTOMER_LAYOUT) {
          element = <CustomerLayout>{element}</CustomerLayout>;
        }

        if (item.layout === ADMIN_LAYOUT) {
          element = <AdminLayout>{element}</AdminLayout>;
        }

        return <Route key={item.key} path={item.key} element={element} />;
      })}
    </Routes>
  );
}
