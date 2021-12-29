import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useSelector} from 'react-redux';
import {selectMode} from '../feautures/darkmode/darkModeSlice';

import {Props} from '../type';
import Colors from '../constants/Colors';

const WrapperWithElevetion = ({children}: Props) => {
  const colorScheme = useSelector(selectMode);
  return (
    <View
      style={{
        ...styles.wrapper,
        backgroundColor: Colors[colorScheme].background,
        borderColor: Colors[colorScheme].text,
      }}>
      {children}
    </View>
  );
};

export default WrapperWithElevetion;

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
    elevation: 1,
    borderWidth: 0.2,
    borderRadius: 7,
  },
});
