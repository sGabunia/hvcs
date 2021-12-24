import {RootState} from './../../app/store/store';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

interface UserProps {
  username: string;
  email: string;
  password: string;
}

interface UserSignInProps {
  email: string;
  password: string;
}

export interface Initial {
  token: null;
  userId: null;
  loadingStatus: boolean;
  error: null | string;
  isSignedIn: boolean;
}

const initialState: Initial = {
  token: null,
  userId: null,
  loadingStatus: false,
  error: null,
  isSignedIn: false,
};

export const signUp = createAsyncThunk(
  'user/signUp',
  async ({username, email, password}: UserProps) => {
    const response = await axios.post(
      'https://teamwork-ecommerce.herokuapp.com/user/register',
      {
        username,
        email,
        password,
      },
    );

    const {token, _id: id} = response.data;
    return {
      id,
      token,
    };
  },
);

export const signIn = createAsyncThunk(
  'user/signIn',
  async ({email, password}: UserSignInProps) => {
    const response = await axios.post(
      'https://teamwork-ecommerce.herokuapp.com/user/auth',
      {
        email,
        password,
      },
    );

    const {token, _id: id} = response.data;
    return {
      id,
      token,
    };
  },
);

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signOut: state => {
      state.token = null;
      state.userId = null;
      state.loadingStatus = false;
      state.error = null;
      state.isSignedIn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.loadingStatus = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        const {id, token} = action.payload;
        state.token = token;
        state.userId = id;
      })
      .addCase(signIn.pending, state => {
        state.loadingStatus = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        const {id, token} = action.payload;
        state.loadingStatus = false;
        state.userId = id;
        state.token = token;
        state.isSignedIn = true;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.loadingStatus = false;
        state.error = 'Wrong email or password';
      });
  },
});

export const {signOut} = authSlice.actions;

export const selectIsSignedIn = ({auth}: RootState) => auth.isSignedIn;
export const selecLoadingStatus = ({auth}: RootState) => auth.loadingStatus;
export const selectError = ({auth}: RootState) => auth.error;
export const selectUserId = ({auth}: RootState) => auth.userId;

export default authSlice.reducer;
