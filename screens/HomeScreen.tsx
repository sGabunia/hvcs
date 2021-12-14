import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyAppText from '../utils/text/MyAppText';
import Wrapper from '../utils/wrapper/Wrapper';

const HomeScreen = () => {
  return (
    <Wrapper>
      <View>
        <MyAppText>Home</MyAppText>
      </View>
    </Wrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
