import React, {useRef, useState} from 'react';
import {StyleSheet, TextInput, Keyboard} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {
  closeSignInModal,
  openRegisterModal,
  selectSignInModalStatus,
} from '../feautures/modal/modalSlice';
import {selectError, signIn} from '../feautures/user/authSlice';

import InputModal from './InputModal';
import ModalWrapper from './ModalWrapper';

const SignInOrRegisterModal = () => {
  const isSignInModalOpen = useSelector(selectSignInModalStatus);
  const dispatch = useDispatch();
  const textInp = useRef<TextInput>();

  const handleRegisterModalOpen = () => {
    dispatch(openRegisterModal());
  };

  const handleSignInModalClose = () => {
    dispatch(closeSignInModal());
  };

  const handleSignIn = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    dispatch(signIn({email, password}));
    Keyboard.dismiss();
  };

  return (
    <ModalWrapper
      isVisible={isSignInModalOpen}
      onPress={handleSignInModalClose}
      textInp={textInp}>
      <InputModal
        title="Sign in"
        email="Email or Username"
        password="Password"
        description="Don't have an account?"
        type="Register"
        reffer={textInp}
        handleRegisterModalOpen={handleRegisterModalOpen}
        handleSubmitData={handleSignIn}
      />
    </ModalWrapper>
  );
};

export default SignInOrRegisterModal;
