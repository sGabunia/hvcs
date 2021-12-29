import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyAppText from '../utils/text/MyAppText';

const SignedInUpdateScreen = () => {
  return (
    <View style={{borderWidth: 3, borderColor: 'red'}}>
      <MyAppText>updates</MyAppText>
    </View>
  );
};

export default SignedInUpdateScreen;

const styles = StyleSheet.create({});
