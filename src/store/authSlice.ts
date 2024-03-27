import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { get } from 'lodash';
import { RootState } from 'store';
import { loading } from 'utils/app';
import request from 'utils/request';

interface IAuthState {
  user: any;
  accessToken: string;
}

const initialState: IAuthState = {
  user: null,
  accessToken: '',
};

export interface IPayloadLogin {
  email: string;
  password: string;
}

export const actionLogin = createAsyncThunk('auth/actionLogin', async (data: IPayloadLogin, { rejectWithValue }) => {
  try {
    return await request({
      url: '/auth/login',
      method: 'POST',
      data,
    });
  } catch (error: any) {
    return rejectWithValue(error);
  }
});

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    actionLogout(state) {
      state.user = null;
      state.accessToken = '';
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(actionLogin.pending, (state) => {
        // loading.on();
      })
      .addCase(actionLogin.fulfilled, (state, action) => {
        const { user, accessToken } = get(action, 'payload.data');
        state.user = user;
        state.accessToken = accessToken;
        // loading.off();
      })
      .addCase(actionLogin.rejected, (state) => {
        state.user = null;
        state.accessToken = '';
        // loading.off();
      });
  },
});

export const { actionLogout } = slice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectLoading = (state: RootState) => state.auth.user;

export default slice.reducer;
