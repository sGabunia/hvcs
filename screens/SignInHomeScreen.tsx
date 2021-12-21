import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import axios from 'axios';

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
// import Gallery from '../components/Gallery';

const SignInHomeScreen = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorState);
  const products = useSelector(selectProducts);

  // const fetchData = async () => {
  //   console.log('fetcjd');
  //   try {
  //     const response = await axios.post('http://10.0.2.2:1111/product');
  //     console.log(response);
  //   } catch (error) {
  //     console.log('err');
  //   }
  // };

  useEffect(() => {
    dispatch(closeSignInModal());
    dispatch(fetchProducts());
    // fetchData();
  }, []);

  if (status === 'pending' || status === 'idle') {
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

  if (status === 'succeeded') {
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
  }
};

export default SignInHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
});
