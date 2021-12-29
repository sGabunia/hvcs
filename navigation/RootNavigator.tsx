import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

// redux store
import {useSelector} from 'react-redux';
import {selectMode} from '../feautures/darkmode/darkModeSlice';

import BottomTabsNavigator from './BottomTabsNavigator';

const RootNavigator = () => {
  const colorScheme = useSelector(selectMode);

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
