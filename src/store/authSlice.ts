import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { get } from 'lodash';
import { RootState } from 'store';
import request from 'utils/request';

// import request from 'util/request';

export interface IUser {
  accessToken: string;
  deptCode: string;
  deptName: string;
  tokenType: string;
  userName: string;
}
// export interface IParamGetUserInfo {
//   userid: string;
//   Authorization: string;
// }
// export interface IUserInfo {
//   userId: string;
//   userName: string;
//   roleNo: number;
//   roleName: string;
//   email: string;
// }

interface IAuthState {
  isLoading: boolean;
  user: IUser | null;
}

// const initUser: IUser = {
//   accessToken: '',
//   deptCode: '',
//   deptName: '',
//   tokenType: '',
//   userName: '',
// };

const initialState: IAuthState = {
  isLoading: false,
  user: null,
};

export interface IPayloadLogin {
  email: string;
  password: string;
}

export const actionLogin = createAsyncThunk('auth/actionLogin', async (data: IPayloadLogin, { rejectWithValue }) => {
  try {
    return await request({
      url: '/common/auth/signin',
      method: 'POST',
      data,
      headers: { ...data },
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
      state.isLoading = false;
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(actionLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(actionLogin.fulfilled, (state, action) => {
        state.user = get(action, 'payload.data');
        state.isLoading = false;
      })
      .addCase(actionLogin.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { actionLogout } = slice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectLoading = (state: RootState) => state.auth.user;

export default slice.reducer;
