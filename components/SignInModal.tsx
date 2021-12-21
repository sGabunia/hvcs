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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterModalOpen = () => {
    dispatch(openRegisterModal());
  };

  const handleSignInModalClose = () => {
    dispatch(closeSignInModal());
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleSignIn = () => {
    if (email && password) {
      dispatch(signIn({email, password}));
    }

    setEmail('');
    setPassword('');
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
        emailValue={email}
        passwordValue={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSignIn}
      />
    </ModalWrapper>
  );
};

export default SignInOrRegisterModal;

const styles = StyleSheet.create({});
