import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

import {useSelector} from 'react-redux';
import {selectMode} from '../feautures/darkmode/darkModeSlice';
// screens
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import UpdatesScreen from '../screens/UpdatesScreen';
import CartScreen from '../screens/CartScreen';

// icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SettingsNavigator from './SettingsNavigator';

import {selectIsSignedIn} from '../feautures/user/authSlice';

import SignedInUpdateScreen from '../screens/SignedInUpdateScreen';
import SignedInCartScreen from '../screens/SignedInCartScreen';

import TopTabsNavigator from './TopTabsNavigator';
import HomeNavigator from './HomeNavigator';

export type RootTabParamList = {
  Home: undefined;
  Favorites: undefined;
  Updates: undefined;
  Person: undefined;
  Cart: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const BottomTabsNavigator = () => {
  const colorScheme = useSelector(selectMode);
  const isSignedIn = useSelector(selectIsSignedIn);

  const {colors} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          paddingBottom: 4,
          paddingTop: 4,
          fontSize: 13,
          color: colors.text,
        },
      }}>
      {!isSignedIn ? (
        <>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <Ionicons
                  name={focused ? 'home' : 'home-outline'}
                  size={28}
                  color={colors.text}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <Ionicons
                  name={focused ? 'heart' : 'heart-outline'}
                  size={28}
                  color={colors.text}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Updates"
            component={UpdatesScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <Ionicons
                  name={focused ? 'notifications' : 'notifications-outline'}
                  size={28}
                  color={colors.text}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Person"
            component={SettingsNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <Ionicons
                  name={focused ? 'person' : 'person-outline'}
                  size={28}
                  color={colors.text}
                />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <MaterialCommunityIcons
                    name={focused ? 'cart' : 'cart-outline'}
                    size={28}
                    color={colors.text}
                  />
                );
              },
            }}
          />
        </>
      ) : (
        <>
          <Tab.Screen
            name="Home"
            component={HomeNavigator}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <Ionicons
                  name={focused ? 'home' : 'home-outline'}
                  size={28}
                  color={colors.text}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Favorites"
            component={TopTabsNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <Ionicons
                  name={focused ? 'heart' : 'heart-outline'}
                  size={28}
                  color={colors.text}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Updates"
            component={SignedInUpdateScreen}
            options={{
              tabBarIcon: ({focused}) => (
                <Ionicons
                  name={focused ? 'notifications' : 'notifications-outline'}
                  size={28}
                  color={colors.text}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Person"
            component={SettingsNavigator}
            options={{
              tabBarIcon: ({focused}) => (
                <Ionicons
                  name={focused ? 'person' : 'person-outline'}
                  size={28}
                  color={colors.text}
                />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Cart"
            component={SignedInCartScreen}
            options={{
              tabBarIcon: ({focused}) => {
                return (
                  <MaterialCommunityIcons
                    name={focused ? 'cart' : 'cart-outline'}
                    size={28}
                    color={colors.text}
                  />
                );
              },
            }}
          />
        </>
      )}
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;

const styles = StyleSheet.create({});
