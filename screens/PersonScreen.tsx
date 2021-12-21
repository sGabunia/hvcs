import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import SignInModal from '../components/SignInModal';
import BeforeSignIn from '../components/BeforeSignIn';
import PersonOptions from '../components/PersonOptions';

import {useDispatch, useSelector} from 'react-redux';
import {openSignInModal} from '../feautures/modal/modalSlice';

import Wrapper from '../utils/wrapper/Wrapper';
import {selectIsSignedIn} from '../feautures/user/authSlice';

const PersonScreen = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);

  const description =
    'Sign in to contact sellers, track your purchases and get personalized recommendations';
  return (
    <Wrapper>
      <SignInModal />
      <View style={styles.wrapper}>
        {!isSignedIn && (
          <>
            <BeforeSignIn
              title="Get the most out of Hvcs"
              description={description}
              buttonTitle="Sign in"
              onPress={() => dispatch(openSignInModal())}
            />
          </>
        )}
        <View style={{marginBottom: 30}}></View>
        <PersonOptions />
      </View>
    </Wrapper>
  );
};

export default PersonScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
});
