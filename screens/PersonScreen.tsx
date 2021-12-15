import React from 'react';
import {StyleSheet, View} from 'react-native';
import BeforeSignIn from '../components/BeforeSignIn';
import PersonOptions from '../components/PersonOptions';

import MyAppText from '../utils/text/MyAppText';
import Wrapper from '../utils/wrapper/Wrapper';

const PersonScreen = () => {
  const description =
    'Sign in to contact sellers, track your purchases and get personalized recommendations';
  return (
    <Wrapper>
      <View style={styles.wrapper}>
        <BeforeSignIn
          title="Get the most out of Hvcs"
          description={description}
          buttonTitle="Sign in"
        />
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
