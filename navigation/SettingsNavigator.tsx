import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// redux store
import {useSelector} from 'react-redux';
import {selectMode} from '../feautures/darkmode/darkModeSlice';

import SettingsScreen from '../screens/SettingsScreen';
import PersonScreen from '../screens/PersonScreen';
import DarkModeScreen from '../screens/DarkModeScreen';

import colors from '../utils/colors/colors';

export type SettingsStackParamList = {
  'Person Details': undefined;
  Settings: undefined;
  'Dark Mode': undefined;
};

const Stack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsNavigator = () => {
  const isDark = useSelector(selectMode);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? colors.medium : colors.light,
        },
        headerTintColor: !isDark ? colors.dark : colors.light,
      }}>
      <Stack.Screen
        name="Person Details"
        component={PersonScreen}
        options={{title: 'Person'}}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Dark Mode" component={DarkModeScreen} />
    </Stack.Navigator>
  );
};

export default SettingsNavigator;
