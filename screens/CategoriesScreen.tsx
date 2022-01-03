import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeParamList} from '../navigation/HomeNavigator';
import {useDispatch} from 'react-redux';
import {fetchProductsByCategory} from '../feautures/productsByCategory/productsByCategorySlice';

type Props = NativeStackScreenProps<HomeParamList, 'Categories'>;

const CategoriesScreen = ({route, navigation}: Props) => {
  const {category} = route.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsByCategory(category));
  }, [dispatch]);
  return (
    <View>
      <Text>categories screen</Text>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
