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

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleregister = () => {
    if (username && email && password) {
      dispatch(signUp({username, email, password}));
    }
    setUsername('');
    setEmail('');
    setPassword('');
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
        usernameValue={username}
        emailValue={email}
        passwordValue={password}
        handleUsernameChange={handleUsernameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleregister}
      />
    </ModalWrapper>
  );
};

export default RegisterModal;
