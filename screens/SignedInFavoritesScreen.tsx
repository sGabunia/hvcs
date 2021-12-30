import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FavoriteProductsGallery from '../components/FavoriteProductsGallery';
import Gallery from '../components/Gallery';
import {
  fetchFavoriteProducts,
  selectFavoriteProductsError,
  selectFavoriteProductsStatus,
  selectFavoriteProducts,
} from '../feautures/favoriteProducts/favoriteProductsSlice';

import {selectUserId} from '../feautures/user/authSlice';
import MyAppText from '../utils/text/MyAppText';
import Wrapper from '../utils/wrapper/Wrapper';

const SignedInFavoritesScreen = ({navigation}: any) => {
  const favoriteProducts = useSelector(selectFavoriteProducts);
  const favoritesStatus = useSelector(selectFavoriteProductsStatus);
  const favoritesError = useSelector(selectFavoriteProductsError);
  const dispatch = useDispatch();

  const fetchFavorites = () => {
    dispatch(fetchFavoriteProducts());
  };

  useEffect(() => {
    if (favoritesStatus === 'idle') {
      fetchFavoriteProducts();
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
      <FavoriteProductsGallery
        products={favoriteProducts}
        onRefresh={fetchFavorites}
        status={favoritesStatus}
      />
    </Wrapper>
  );
};

export default SignedInFavoritesScreen;

const styles = StyleSheet.create({});
