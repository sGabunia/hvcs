import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FavoriteProductsGallery from '../components/FavoriteProductsGallery';
import {
  fetchFavoriteProducts,
  selectFavoriteProductsError,
  selectFavoriteProductsStatus,
  selectFavoriteProducts,
} from '../feautures/favoriteProducts/favoriteProductsSlice';

import {selectUserId} from '../feautures/user/authSlice';
import MyAppText from '../utils/text/MyAppText';
import Wrapper from '../utils/wrapper/Wrapper';

const SignedInFavoritesScreen = () => {
  const userId = useSelector(selectUserId);
  const favoriteProducts = useSelector(selectFavoriteProducts);
  const favoritesStatus = useSelector(selectFavoriteProductsStatus);
  const favoritesError = useSelector(selectFavoriteProductsError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (favoritesStatus === 'idle') {
      dispatch(fetchFavoriteProducts());
    }
  }, [dispatch, favoriteProducts]);

  if (favoritesStatus === 'pending') {
    return <ActivityIndicator size={24} />;
  }

  if (favoritesStatus === 'failed') {
    return <MyAppText>{favoritesError}</MyAppText>;
  }

  return (
    <Wrapper>
      <FavoriteProductsGallery />
    </Wrapper>
  );
};

export default SignedInFavoritesScreen;

const styles = StyleSheet.create({});
