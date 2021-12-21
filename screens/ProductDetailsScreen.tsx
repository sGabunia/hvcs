import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useSelector} from 'react-redux';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeParamList} from '../navigation/RootNavigator';
import {selectSingleProduct} from '../feautures/products/productsSlice';

type Props = NativeStackScreenProps<HomeParamList, 'Product Details'>;

const ProductDetailsScreen = ({route}: Props) => {
  const {id} = route.params;
  const product = useSelector(selectSingleProduct(id));
  console.log(product);
  return (
    <View>
      <Text>product details</Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
