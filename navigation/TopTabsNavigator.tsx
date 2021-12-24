import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SignedInFavoritesScreen from '../screens/SignedInFavoritesScreen';
import FavoriteShopsScreen from '../screens/FavoriteShopsScreen';

type TopTabParamList = {
  'Favorite Items': undefined;
  'Favorite Shops': undefined;
};

const Tab = createMaterialTopTabNavigator<TopTabParamList>();

function TopTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorite Items" component={SignedInFavoritesScreen} />
      <Tab.Screen name="Favorite Shops" component={FavoriteShopsScreen} />
    </Tab.Navigator>
  );
}

export default TopTabsNavigator;
