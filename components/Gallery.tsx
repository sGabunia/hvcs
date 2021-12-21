import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Product} from '../feautures/products/productsSlice';
import MyAppText from '../utils/text/MyAppText';
import GalleryItem from './GalleryItem';

interface Props {
  title: string;
  products: Product[];
}

const Gallery = ({title, products}: Props) => {
  return (
    <View style={styles.wrapper}>
      <MyAppText style={styles.title}>{title}</MyAppText>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        {products.slice(0, 6).map((product: Product, index: number) => {
          return <GalleryItem product={product} key={index} />;
        })}
      </View>
    </View>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 15,
  },
  title: {
    fontSize: 20,
  },
});
