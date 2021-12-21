import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyAppText from '../utils/text/MyAppText';

const StyleHeader = () => {
  return (
    <View style={styles.wrapper}>
      <View></View>
      <View>
        <MyAppText>What's uour style?</MyAppText>
        <MyAppText>
          Favoriting helps Etsy provide unique recommendations, tailored just
          for you. Tap on some heart icons below so we know what you like
        </MyAppText>
      </View>
    </View>
  );
};

export default StyleHeader;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    borderRadius: 7,
    backgroundColor: '#b88c93',
  },
});
