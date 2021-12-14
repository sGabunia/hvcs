import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PersonOptions from '../components/PersonOptions';

import MyAppText from '../utils/text/MyAppText';
import Wrapper from '../utils/wrapper/Wrapper';

const PersonScreen = () => {
  return (
    <Wrapper>
      <View style={styles.wrapper}>
        <PersonOptions />
      </View>
    </Wrapper>
  );
};

export default PersonScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
