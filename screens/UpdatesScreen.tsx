import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BeforeSignIn from '../components/BeforeSignIn';

import Wrapper from '../utils/wrapper/Wrapper';

const UpdatesScreen = () => {
  const text = 'Sign in to stay up to date on your favorite items and shops.';
  return (
    <Wrapper>
      <View style={styles.center}>
        <BeforeSignIn
          title="No updates ...yet."
          description={text}
          buttonTitle="Sign in"
          icon="newspaper-outline"
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
