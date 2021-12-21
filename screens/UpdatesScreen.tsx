import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {useDispatch} from 'react-redux';
import {openSignInModal} from '../feautures/modal/modalSlice';

import SignInModal from '../components/SignInModal';
import BeforeSignIn from '../components/BeforeSignIn';

import Wrapper from '../utils/wrapper/Wrapper';

const UpdatesScreen = () => {
  const dispatch = useDispatch();
  const text = 'Sign in to stay up to date on your favorite items and shops.';
  return (
    <Wrapper>
      <SignInModal />
      <View style={styles.center}>
        <BeforeSignIn
          title="No updates ...yet."
          description={text}
          buttonTitle="Sign in"
          icon="newspaper-outline"
          onPress={() => dispatch(openSignInModal())}
        />
      </View>
    </Wrapper>
  );
};

export default UpdatesScreen;

const styles = StyleSheet.create({
  center: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
