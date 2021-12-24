import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {
  closeRegisterModal,
  closeSignInModal,
  openSignInModal,
  selectRegisterModalStatus,
} from '../feautures/modal/modalSlice';
import {signUp} from '../feautures/user/authSlice';

import ModalWrapper from './ModalWrapper';
import InputModal from './InputModal';

const RegisterModal = () => {
  const dispatch = useDispatch();
  const isRegisterModalOpen = useSelector(selectRegisterModalStatus);

  const handleregister = ({
    username,
    email,
    password,
  }: {
    username: string;
    email: string;
    password: string;
  }) => {
    dispatch(signUp({username, email, password}));
    Keyboard.dismiss();
  };
  const handleCloseBothModals = () => {
    dispatch(closeSignInModal());
    dispatch(closeRegisterModal());
  };

  const backToSignInModal = () => {
    dispatch(openSignInModal());
    dispatch(closeRegisterModal());
  };
  return (
    <ModalWrapper
      isVisible={isRegisterModalOpen}
      onPress={handleCloseBothModals}>
      <InputModal
        title="Register"
        email="Your Email"
        password="Password"
        description="Have an account?"
        type="Sign in"
        handleRegisterModalOpen={backToSignInModal}
        handleSubmitData={handleregister}
      />
    </ModalWrapper>
  );
};

export default RegisterModal;
