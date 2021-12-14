import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {useSelector} from 'react-redux';
import {selectMode} from '../../feautures/darkmode/darkModeSlice';

import {Props} from '../../type';

import colors from '../colors/colors';

const MyAppText: React.FC<Props> = ({children}) => {
  const isDark = useSelector(selectMode);
  return <Text style={isDark ? styles.light : styles.dark}>{children}</Text>;
};

export default MyAppText;

const styles = StyleSheet.create({
  light: {
    fontSize: 16,
    color: colors.light,
  },
  dark: {
    fontSize: 16,
    color: colors.dark,
  },
});
