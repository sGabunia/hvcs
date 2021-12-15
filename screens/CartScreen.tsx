import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BeforeSignIn from '../components/BeforeSignIn';
import CustomMainButton from '../components/CustomMainButton';

import Wrapper from '../utils/wrapper/Wrapper';

const CartScreen = () => {
  return (
    <Wrapper>
      <View style={styles.center}>
        <BeforeSignIn
          title="It's empty ... for now."
          description="Need some inspiration?"
          buttonTitle="See trending items"
          icon="cart-outline"
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
