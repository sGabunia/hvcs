import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';

import {useSelector} from 'react-redux';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {HomeParamList} from '../navigation/HomeNavigator';
import {selectSingleProduct} from '../feautures/products/productsSlice';

import Wrapper from '../utils/wrapper/Wrapper';
import MyAppText from '../utils/text/MyAppText';

import IonIcons from 'react-native-vector-icons/Ionicons';
import {selectMode} from '../feautures/darkmode/darkModeSlice';
import colors from '../utils/colors/colors';
import CustomMainButton from '../components/CustomMainButton';

type Props = NativeStackScreenProps<HomeParamList, 'Product Details'>;

const ProductDetailsScreen = ({route}: Props) => {
  const {id} = route.params;
  const product = useSelector(selectSingleProduct(id));
  const isDark = useSelector(selectMode);

  return (
    <Wrapper>
      <ScrollView>
        <View>
          <ImageBackground
            source={{
              uri: `data:image/jpeg;base64,${product?.imageId.primaryImage}`,
            }}
            style={styles.bgImage}
          />
        </View>
        <View style={styles.info}>
          <View>
            <MyAppText style={styles.bold}>MuddyHeart</MyAppText>
            <View>
              <MyAppText>
                7868 sales | <IonIcons name="star" />{' '}
                <MyAppText style={styles.bold}>
                  {product?.rating}{' '}
                  <MyAppText style={{fontWeight: '400'}}>(884)</MyAppText>
                </MyAppText>
              </MyAppText>
            </View>
          </View>

          <View style={styles.description}>
            <MyAppText>{product!.description}</MyAppText>
          </View>

          <View style={styles.priceWrapper}>
            {product!.ammount > 0 ? (
              <>
                <View style={styles.stock}>
                  <IonIcons
                    name="checkmark"
                    size={20}
                    color={isDark ? colors.light : colors.dark}
                  />
                  <MyAppText style={styles.bold}>In Stock</MyAppText>
                </View>
                <MyAppText
                  style={styles.price}>{`$${product?.price}`}</MyAppText>
              </>
            ) : (
              <MyAppText>There is no product left</MyAppText>
            )}
          </View>
          <MyAppText style={styles.description}>
            Pay it in 4 interest-free installments with{' '}
            <MyAppText style={styles.bold}>Sweeft Wallet</MyAppText>
          </MyAppText>

          <View style={styles.description}>
            <MyAppText style={styles.bold}>Free Sheeping</MyAppText>
            <MyAppText>
              To <MyAppText style={styles.bold}>Georgia</MyAppText>
            </MyAppText>
          </View>

          <View>
            <CustomMainButton
              onPress={() => console.log('Buy')}
              style={{width: '100%'}}>
              Buy it now
            </CustomMainButton>
            <CustomMainButton onPress={() => console.log('chart')}>
              Add to chart
            </CustomMainButton>
          </View>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  info: {
    padding: 15,
  },
  bgImage: {
    width: '100%',
    height: 400,
  },
  description: {
    marginVertical: 10,
  },
  priceWrapper: {
    marginVertical: 5,
  },
  price: {
    fontSize: 25,
  },
  stock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bold: {
    fontWeight: '700',
  },
});
