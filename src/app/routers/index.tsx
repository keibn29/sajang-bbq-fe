import { lazy, ReactElement, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import NotFound from 'app/page/NotFound';
import CustomerLayout from 'app/layout/Customer';
import { URL } from 'constants/url';
import User from 'app/page/Admin/User';
import AdminLayout from 'app/layout/Admin';
import Dashboard from 'app/page/Admin/Dashboard';
import Branch from 'app/page/Admin/Branch';
import { getPageName } from 'utils/app';
import BookingMangament from 'app/page/Admin/Booking';

const CUSTOMER_LAYOUT = 'customer';
const ADMIN_LAYOUT = 'admin';
const NONE_LAYOUT = 'none';

const Home = lazy(() => import('app/page/Home'));
const Address = lazy(() => import('app/page/Address'));
const Menu = lazy(() => import('app/page/Menu'));
const Offer = lazy(() => import('app/page/Offer'));
const Blog = lazy(() => import('app/page/Blog'));
const Gallery = lazy(() => import('app/page/Gallery'));
const Contact = lazy(() => import('app/page/Contact'));
const Booking = lazy(() => import('app/page/Booking'));
const Login = lazy(() => import('app/page/Auth'));

interface ItemType {
  key: string;
  components: ReactElement;
  layout: string;
}

const customerItems: ItemType[] = [
  {
    key: URL.home,
    components: <Home />,
    layout: CUSTOMER_LAYOUT,
  },
  {
    key: URL.address,
    components: <Address />,
    layout: CUSTOMER_LAYOUT,
  },
  {
    key: URL.menu,
    components: <Menu />,
    layout: CUSTOMER_LAYOUT,
  },
  {
    key: URL.offer,
    components: <Offer />,
    layout: CUSTOMER_LAYOUT,
  },
  {
    key: URL.blog,
    components: <Blog />,
    layout: CUSTOMER_LAYOUT,
  },
  {
    key: URL.gallery,
    components: <Gallery />,
    layout: CUSTOMER_LAYOUT,
  },
  {
    key: URL.contact,
    components: <Contact />,
    layout: CUSTOMER_LAYOUT,
  },
  {
    key: URL.booking,
    components: <Booking />,
    layout: CUSTOMER_LAYOUT,
  },
];

const adminItems: ItemType[] = [
  {
    key: URL.admin.dashboard,
    components: <Dashboard />,
    layout: ADMIN_LAYOUT,
  },
  {
    key: URL.admin.user,
    components: <User />,
    layout: ADMIN_LAYOUT,
  },
  {
    key: URL.admin.branch,
    components: <Branch />,
    layout: ADMIN_LAYOUT,
  },
  {
    key: URL.admin.booking,
    components: <BookingMangament />,
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
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
