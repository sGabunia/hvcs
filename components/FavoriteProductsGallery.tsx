import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Product} from '../feautures/products/productsSlice';
import GalleryItem from './GalleryItem';

interface Props {
  products: Product[];
  onRefresh: () => void;
  status: 'idle' | 'succeeded' | 'pending';
}

const FavoriteProductsGallery = ({products, onRefresh, status}: Props) => {
  const renderFavoriteProducts = ({item}: {item: Product}) => {
    return <GalleryItem product={item} />;
  };
  return (
    <FlatList
      data={products}
      renderItem={renderFavoriteProducts}
      numColumns={2}
      onRefresh={onRefresh}
      refreshing={status === 'pending'}
    />
  );
};

export default FavoriteProductsGallery;

const styles = StyleSheet.create({});
