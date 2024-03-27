import { ConfigProvider } from 'antd';
import AppConfirmation from 'app/components/common/AppConfirmation';
import AppLoading from 'app/components/common/AppLoading';
import Routers from 'app/routers';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store';
import 'styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#a31d24',
            fontFamily: 'Inter, sans-serif',
          },
        }}
      >
        <AppLoading />
        <AppConfirmation />
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </ConfigProvider>
    </PersistGate>
  </Provider>
);
