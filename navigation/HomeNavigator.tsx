import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInHomeScreen from '../screens/SignInHomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';

export type HomeParamList = {
  Products: undefined;
  'Product Details': {id: string};
  Categories: {category: 'Handmade' | 'Furniture'};
};

const Stack = createNativeStackNavigator<HomeParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen name="Products" component={SignInHomeScreen} />
      <Stack.Screen name="Product Details" component={ProductDetailsScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
