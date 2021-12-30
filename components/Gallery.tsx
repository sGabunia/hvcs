import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Product} from '../feautures/products/productsSlice';
import MyAppText from '../utils/text/MyAppText';
import GalleryItem from './GalleryItem';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeParamList} from '../navigation/HomeNavigator';

type CategoriesScreenNavigationProp = NativeStackNavigationProp<
  HomeParamList,
  'Categories'
>;

interface Props {
  title?: string;
  products: Product[];
  onRefresh?: () => void;
}

const Gallery = ({title, products}: Props) => {
  const navigation = useNavigation<CategoriesScreenNavigationProp>();

  const navigateToCategoriesGallery = () => {
    navigation.navigate('Categories');
  };
  return (
    <View style={styles.wrapper}>
      {title && (
        <Pressable onPress={navigateToCategoriesGallery}>
          <MyAppText style={styles.title}>{title}</MyAppText>
        </Pressable>
      )}
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
