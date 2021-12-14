import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SettingsStackParamList} from '../navigation/SettingsNavigator';
import {useNavigation} from '@react-navigation/native';

import CustomRippleButton from '../components/CustomRippleButton';
import WrapperWithElevetion from '../components/WrapperWithElevetion';
import MyAppText from '../utils/text/MyAppText';
import Wrapper from '../utils/wrapper/Wrapper';

type DarkModeScreenType = NativeStackNavigationProp<
  SettingsStackParamList,
  'Dark Mode'
>;

const SettingsScreen = () => {
  const navigation = useNavigation<DarkModeScreenType>();
  const navigateToDarkModeScreen = () => {
    console.log('adasjd');
    navigation.navigate('Dark Mode');
  };
  return (
    <Wrapper>
      <View style={styles.center}>
        <WrapperWithElevetion>
          <CustomRippleButton>
            <MyAppText>Enable History</MyAppText>
          </CustomRippleButton>
          <CustomRippleButton>
            <MyAppText>Viewing History Cleared</MyAppText>
          </CustomRippleButton>
          <CustomRippleButton>
            <MyAppText>Search History Cleared</MyAppText>
          </CustomRippleButton>
          <CustomRippleButton>
            <MyAppText>Select Currency</MyAppText>
          </CustomRippleButton>
          <CustomRippleButton>
            <MyAppText>About This App</MyAppText>
          </CustomRippleButton>
          <CustomRippleButton onPress={navigateToDarkModeScreen}>
            <MyAppText>Dark Mode</MyAppText>
          </CustomRippleButton>
        </WrapperWithElevetion>
      </View>
    </Wrapper>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    marginTop: 20,
  },
});
