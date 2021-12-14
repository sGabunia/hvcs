import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomMainButton from '../components/CustomMainButton';

import MyAppText from '../utils/text/MyAppText';
import Wrapper from '../utils/wrapper/Wrapper';

const CartScreen = () => {
  return (
    <Wrapper>
      <View style={{alignItems: 'center'}}>
        <CustomMainButton onPress={() => console.log('hello')}>
          Sign in
        </CustomMainButton>
      </View>
    </Wrapper>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
