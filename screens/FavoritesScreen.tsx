import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useDispatch} from 'react-redux';
import {openSignInModal} from '../feautures/modal/modalSlice';

import SignInModal from '../components/SignInModal';
import BeforeSignIn from '../components/BeforeSignIn';

import Wrapper from '../utils/wrapper/Wrapper';

const FavoritesScreen = () => {
  const dispatch = useDispatch();
  const text = 'Sign in to save your favorite items, searches and shops.';

  return (
    <Wrapper>
      <SignInModal />
      <View style={styles.center}>
        <BeforeSignIn
          title="Nothing here ... yet."
          description={text}
          buttonTitle="Sign in"
          icon="heart-outline"
          onPress={() => dispatch(openSignInModal())}
        />
      </View>
    </Wrapper>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  center: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
