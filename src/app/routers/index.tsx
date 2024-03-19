import { lazy, ReactElement, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from 'app/page/NotFound';
import DefaultLayout from 'app/layout/DefaultLayout';
import { URL } from 'constant/url';

const DEFAULT_LAYOUT = 'default';
const NONE_LAYOUT = 'none';

const Home = lazy(() => import('app/page/Home'));

interface ItemType {
  key: string;
  components: ReactElement;
  layout: string;
  private: boolean;
}

const userItems: ItemType[] = [
  {
    key: URL.Home,
    components: <Home />,
    layout: DEFAULT_LAYOUT,
    private: true,
  },
];

const sharedItems: ItemType[] = [
  {
    key: '*',
    components: <NotFound />,
    layout: NONE_LAYOUT,
    private: false,
  },
];

export default function Routers() {
  const items = userItems.concat(sharedItems);
  return (
    <Routes>
      {items.map((item) => {
        let element = item.components;

        element = <Suspense fallback={null}>{element}</Suspense>;

        if (item.layout === DEFAULT_LAYOUT) {
          element = <DefaultLayout>{element}</DefaultLayout>;
        }

        return <Route key={item.key} path={item.key} element={element} />;
      })}
    </Routes>
  );
}
