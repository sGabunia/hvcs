import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MyAppText from '../utils/text/MyAppText';
import Wrapper from '../utils/wrapper/Wrapper';

const CartScreen = () => {
  return (
    <Wrapper>
      <View>
        <MyAppText>Cart</MyAppText>
      </View>
    </Wrapper>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
