import React from 'react';
import ReactDOM from 'react-dom/client';
import { persistor, store } from 'store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import Routers from 'app/routers';
import 'styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routers />
  </BrowserRouter>
);
