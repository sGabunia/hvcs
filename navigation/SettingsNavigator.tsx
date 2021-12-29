import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SettingsScreen from '../screens/SettingsScreen';
import PersonScreen from '../screens/PersonScreen';
import DarkModeScreen from '../screens/DarkModeScreen';

export type SettingsStackParamList = {
  'Person Details': undefined;
  Settings: undefined;
  'Dark Mode': undefined;
};

const Stack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsNavigator = () => {
  return (
    <Stack.Navigator>
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
