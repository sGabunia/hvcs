import React, {useEffect} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {closeSignInModal} from '../feautures/modal/modalSlice';
import {
  fetchProducts,
  selectErrorState,
  selectProducts,
  selectLoadingStatus,
} from '../feautures/products/productsSlice';

import MyAppText from '../utils/text/MyAppText';

import LoadingAndErrorWrapper from '../components/LoadingAndErrorWrapper';
import Wrapper from '../utils/wrapper/Wrapper';
import StyleHeader from '../components/StyleHeader';
import Gallery from '../components/Gallery';

const SignInHomeScreen = () => {
  const dispatch = useDispatch();
  const productsStatus = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorState);
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(closeSignInModal());
    if (productsStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, productsStatus]);

  if (productsStatus === 'pending') {
    return (
      <LoadingAndErrorWrapper>
        <ActivityIndicator />
      </LoadingAndErrorWrapper>
    );
  }

  if (error) {
    return (
      <LoadingAndErrorWrapper>
        <MyAppText>Network error</MyAppText>
      </LoadingAndErrorWrapper>
    );
  }

  return (
    <Wrapper>
      <View style={{flex: 1, padding: 15}}>
        <ScrollView>
          <StyleHeader />
          <Gallery title="Similar to items you viewed" products={products} />
          <Gallery title="Our picks for you" products={products} />
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default SignInHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
});
