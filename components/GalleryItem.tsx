import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import {Product} from '../feautures/products/productsSlice';

import {useNavigation} from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../utils/colors/colors';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeParamList} from '../navigation/RootNavigator';

type ProductsScreenType = NativeStackNavigationProp<
  HomeParamList,
  'Product Details'
>;

interface Props {
  product: Product;
}

const GalleryItem = ({product}: Props) => {
  const navigation = useNavigation<ProductsScreenType>();
  const navigateToProductDetails = () => {
    navigation.navigate('Product Details', {id: product._id});
  };

  console.log(product);

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
        <TouchableWithoutFeedback onPress={() => console.log('hello')}>
          <MaterialIcons
            name="favorite-outline"
            size={28}
            color={colors.light}
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
