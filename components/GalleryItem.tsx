import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  Product,
  removeFromFavoriteProducts,
} from '../feautures/products/productsSlice';
import {addToFavorites} from '../feautures/favoriteProducts/favoriteProductsSlice';

import {useDispatch} from 'react-redux';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {HomeParamList} from '../navigation/HomeNavigator';

import colors from '../utils/colors/colors';

type ProductsScreenType = NativeStackNavigationProp<
  HomeParamList,
  'Product Details'
>;

interface Props {
  product: Product;
}

const GalleryItem = ({product}: Props) => {
  const navigation = useNavigation<ProductsScreenType>();
  const dispatch = useDispatch();
  const navigateToProductDetails = () => {
    navigation.navigate('Product Details', {id: product._id});
  };

  const addProductToFavorites = () => {
    if (product.isFavorite) {
      dispatch(removeFromFavoriteProducts(product._id));
    } else {
      dispatch(addToFavorites(product._id));
    }
  };

  return (
    <Pressable
      onPress={navigateToProductDetails}
      style={{
        borderRadius: 6,
        marginHorizontal: 3,
        width: '48%',
        height: 150,
        marginBottom: 10,
        overflow: 'hidden',
      }}>
      <View style={{width: '100%', height: '100%', position: 'relative'}}>
        <TouchableWithoutFeedback onPress={addProductToFavorites}>
          <MaterialIcons
            name={product.isFavorite ? 'favorite' : 'favorite-outline'}
            size={28}
            color={product.isFavorite ? 'red' : colors.light}
            style={{position: 'absolute', zIndex: 1, top: 10, right: 10}}
          />
        </TouchableWithoutFeedback>

        <Image
          source={{
            uri: `data:image/jpeg;base64,${product.primaryImage}`,
          }}
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
        />
      </View>
    </Pressable>
  );
};

export default GalleryItem;

const styles = StyleSheet.create({});
