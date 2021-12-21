import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import BeforeSignIn from '../components/BeforeSignIn';
import RegisterModal from '../components/RegisterModal';
import SignInModal from '../components/SignInModal';
import {closeSignInModal, openSignInModal} from '../feautures/modal/modalSlice';

import Wrapper from '../utils/wrapper/Wrapper';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleSignInModalOpen = () => {
    dispatch(openSignInModal());
  };

  const text =
    'Sign in to save ypur favorites and get personalized recommendations.';
  return (
    <Wrapper>
      <SignInModal />
      <RegisterModal />
      <View style={styles.center}>
        <BeforeSignIn
          title="Welcome to Hvcs!"
          description={text}
          buttonTitle="Get started"
          icon="search-outline"
          onPress={handleSignInModalOpen}
        />
      </View>
    </Wrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  center: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
