import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useSelector} from 'react-redux';
import {selectMode} from '../feautures/darkmode/darkModeSlice';
import colors from '../utils/colors/colors';

type Props = {
  hasIcon: 'on' | 'off';
};

const CustomSwitchButton = ({hasIcon}: Props) => {
  const isDark = useSelector(selectMode);

  if (isDark) {
    return (
      <View
        style={{
          ...styles.circle,
          ...styles.dark,
          borderWidth: hasIcon === 'off' ? 1 : 8,
          borderColor: colors.light,
        }}></View>
    );
  }
  return (
    <View
      style={{
        ...styles.circle,
        ...styles.light,
        borderWidth: hasIcon === 'off' ? 8 : 1,
      }}></View>
  );
};

export default CustomSwitchButton;

const styles = StyleSheet.create({
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  light: {
    backgroundColor: colors.light,
  },
  dark: {
    backgroundColor: colors.dark,
  },
});
