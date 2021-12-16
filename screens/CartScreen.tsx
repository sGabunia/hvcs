import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootTabParamList} from '../navigation/RootNavigator';

import BeforeSignIn from '../components/BeforeSignIn';
import Wrapper from '../utils/wrapper/Wrapper';

type HomeScreenType = NativeStackNavigationProp<RootTabParamList, 'Home'>;

const CartScreen = () => {
  const navigation = useNavigation<HomeScreenType>();

  const navigateToHomeScreen = () => {
    navigation.navigate('Home');
  };
  return (
    <Wrapper>
      <View style={styles.center}>
        <BeforeSignIn
          title="It's empty ... for now."
          description="Need some inspiration?"
          buttonTitle="See trending items"
          icon="cart-outline"
          onPress={navigateToHomeScreen}
        />
      </View>
    </Wrapper>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  center: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
