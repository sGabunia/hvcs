import React from 'react';
import {StyleSheet, View} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SettingsStackParamList} from '../navigation/SettingsNavigator';
import {useNavigation} from '@react-navigation/native';

import {useSelector, useDispatch} from 'react-redux';
import {selectIsSignedIn, signOut} from '../feautures/user/authSlice';

import CustomRippleButton from '../components/CustomRippleButton';
import WrapperWithElevetion from '../components/WrapperWithElevetion';
import MyAppText from '../utils/text/MyAppText';
import Wrapper from '../utils/wrapper/Wrapper';
import CustomMainButton from '../components/CustomMainButton';
import {RootTabParamList} from '../navigation/BottomTabsNavigator';
import {emptyProductList} from '../feautures/products/productsSlice';

type DarkModeScreenType = NativeStackNavigationProp<
  SettingsStackParamList,
  'Dark Mode'
>;

type HomeScreenType = NativeStackNavigationProp<RootTabParamList, 'Home'>;

const SettingsScreen = () => {
  const navigation = useNavigation<DarkModeScreenType>();
  const navigationHome = useNavigation<HomeScreenType>();
  const navigateToDarkModeScreen = () => {
    navigation.navigate('Dark Mode');
  };

  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);

  const handleSignOut = () => {
    dispatch(signOut());
    dispatch(emptyProductList());
    navigationHome.navigate('Home');
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
        {isSignedIn && (
          <CustomMainButton onPress={handleSignOut}>Sign Out</CustomMainButton>
        )}
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
