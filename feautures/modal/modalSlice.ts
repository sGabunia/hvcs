import {RootState} from './../../app/store/store';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isSignInModalOpen: false,
  isRegisterModalOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openSignInModal: state => {
      state.isSignInModalOpen = true;
    },
    closeSignInModal: state => {
      state.isSignInModalOpen = false;
    },
    openRegisterModal: state => {
      state.isRegisterModalOpen = true;
      state.isSignInModalOpen = false;
    },
    closeRegisterModal: state => {
      state.isRegisterModalOpen = false;
    },
  },
});

export const {
  openSignInModal,
  closeSignInModal,
  openRegisterModal,
  closeRegisterModal,
} = modalSlice.actions;

export const selectSignInModalStatus = (state: RootState) =>
  state.modalsState.isSignInModalOpen;

export const selectRegisterModalStatus = (state: RootState) =>
  state.modalsState.isRegisterModalOpen;

export default modalSlice.reducer;
