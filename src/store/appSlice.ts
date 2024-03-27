import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface IConfirmation {
  isOpen?: boolean;
  type: 'single' | 'multi';
  message: string;
  title: string;
  onSubmit?: () => void;
  onCancel?: () => void;
}

export interface IAppState {
  isLoading: boolean;
  confirmation: IConfirmation;
}

const initialState: IAppState = {
  isLoading: false,
  confirmation: {
    isOpen: false,
    type: 'single',
    message: '',
    title: '',
    onSubmit: () => {},
    onCancel: () => {},
  },
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    actionAppLoadingOff(state) {
      state.isLoading = false;
    },
    actionAppLoadingOn(state) {
      state.isLoading = true;
    },
    actionCloseAppConfirmation(state) {
      state.confirmation = initialState.confirmation;
    },
    actionOpenAppConfirmation(state, action: PayloadAction<IConfirmation>) {
      state.confirmation = { ...action.payload, isOpen: true };
    },
  },
});

export const { actionAppLoadingOff, actionAppLoadingOn, actionCloseAppConfirmation, actionOpenAppConfirmation } =
  slice.actions;

export const selectAppLoading = (state: RootState) => state.app.isLoading;
export const selectAppConfirmation = (state: RootState) => state.app.confirmation;

export default slice.reducer;
