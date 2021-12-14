import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useSelector} from 'react-redux';
import {selectMode} from '../../feautures/darkmode/darkModeSlice';

import {Props} from '../../type';

import colors from '../colors/colors';

const Wrapper: React.FC<Props> = ({children}) => {
  const isDark = useSelector(selectMode);
  return (
    <View
      style={{backgroundColor: isDark ? colors.dark : colors.light, flex: 1}}>
      {children}
    </View>
  );
};

export default Wrapper;

const styles = StyleSheet.create({});
