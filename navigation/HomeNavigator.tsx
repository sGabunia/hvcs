import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInHomeScreen from '../screens/SignInHomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';

export type HomeParamList = {
  Products: undefined;
  'Product Details': {id: string};
};

const Stack = createNativeStackNavigator<HomeParamList>();

// @ts-ignore
const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen name="Products" component={SignInHomeScreen} />
      <Stack.Screen name="Product Details" component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
