import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BeforeSignIn from '../components/BeforeSignIn';

import MyAppText from '../utils/text/MyAppText';
import Wrapper from '../utils/wrapper/Wrapper';

const FavoritesScreen = () => {
  const text = 'Sign in to save your favorite items, searches and shops.';
  return (
    <Wrapper>
      <View style={styles.center}>
        <BeforeSignIn
          title="Nothing here ... yet."
          description={text}
          buttonTitle="Sign in"
          icon="heart-outline"
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
