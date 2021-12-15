import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

import {useSelector} from 'react-redux';
import {selectMode} from '../../feautures/darkmode/darkModeSlice';
interface Props {
  children: Element;
  style?: TextStyle;
}

import colors from '../colors/colors';

const MyAppText: React.FC<Props> = ({children, style}) => {
  const isDark = useSelector(selectMode);
  return (
    <Text
      style={{
        ...styles.text,
        color: isDark ? colors.light : colors.dark,
        ...style,
      }}>
      {children}
    </Text>
  );
};

export default MyAppText;

const styles = StyleSheet.create({
  text: {fontSize: 16},
  light: {
    color: colors.light,
  },
  dark: {
    color: colors.dark,
  },
});
