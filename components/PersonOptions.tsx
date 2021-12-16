import React from 'react';
import {StyleSheet} from 'react-native';

// navigation
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SettingsStackParamList} from '../navigation/SettingsNavigator';
import {useNavigation} from '@react-navigation/native';

import MyAppText from '../utils/text/MyAppText';
import CustomRippleButton from './CustomRippleButton';

import WrapperWithElevetion from './WrapperWithElevetion';

type SettingsScreenType = NativeStackNavigationProp<
  SettingsStackParamList,
  'Settings'
>;

const PersonOptions = () => {
  const navigation = useNavigation<SettingsScreenType>();

  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };
  return (
    <WrapperWithElevetion>
      <CustomRippleButton onPress={navigateToSettings}>
        <MyAppText>Settings</MyAppText>
      </CustomRippleButton>
      <CustomRippleButton>
        <MyAppText>Help</MyAppText>
      </CustomRippleButton>
      <CustomRippleButton>
        <MyAppText>Get Sell on Hvcs</MyAppText>
      </CustomRippleButton>
    </WrapperWithElevetion>
  );
};

export default PersonOptions;

const styles = StyleSheet.create({});
