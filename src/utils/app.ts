import { store } from 'store';
import { IConfirmation, actionAppLoadingOff, actionAppLoadingOn, actionOpenAppConfirmation } from 'store/appSlice';

export const getPageName = () => window.location.pathname.split('/').pop() || 'home';

export const loading = {
  on: () => {
    store.dispatch(actionAppLoadingOn());
  },
  off: () => {
    store.dispatch(actionAppLoadingOff());
  },
};

export const confirmation = (config: IConfirmation) => {
  store.dispatch(actionOpenAppConfirmation(config));
};
