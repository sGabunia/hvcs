import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useDispatch} from 'react-redux';
import {
  setToDarkMode,
  setToLightMode,
} from '../feautures/darkmode/darkModeSlice';

import CustomRippleButton from '../components/CustomRippleButton';
import MyAppText from '../utils/text/MyAppText';
import Wrapper from '../utils/wrapper/Wrapper';

const DarkModeScreen = () => {
  const dispatch = useDispatch();

  const turnOnDarkMode = () => {
    dispatch(setToDarkMode());
  };

  const turnOffDarkMode = () => {
    dispatch(setToLightMode());
  };
  return (
    <Wrapper>
      <CustomRippleButton hasIcon="on" onPress={turnOnDarkMode}>
        <MyAppText>On</MyAppText>
      </CustomRippleButton>
      <CustomRippleButton hasIcon="off" onPress={turnOffDarkMode}>
        <MyAppText>Off</MyAppText>
      </CustomRippleButton>
    </Wrapper>
  );
};

export default DarkModeScreen;

const styles = StyleSheet.create({});
