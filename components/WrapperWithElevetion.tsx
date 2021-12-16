import React from 'react';
import {StyleSheet, View} from 'react-native';

import {useSelector} from 'react-redux';
import {selectMode} from '../feautures/darkmode/darkModeSlice';

import colors from '../utils/colors/colors';
import {Props} from '../type';

const WrapperWithElevetion = ({children}: Props) => {
  const isDark = useSelector(selectMode);
  return (
    <View
      style={{
        ...styles.wrapper,
        backgroundColor: isDark ? colors.gray : colors.light,
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
