import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {useSelector} from 'react-redux';
import {selectMode} from '../feautures/darkmode/darkModeSlice';

type Props = {
  hasIcon: 'on' | 'off';
};

const CustomSwitchButton = ({hasIcon}: Props) => {
  const isDark = useSelector(selectMode);
  const {colors} = useTheme();

  if (isDark === 'dark') {
    return (
      <View
        style={{
          ...styles.circle,
          backgroundColor: colors.background,
          borderWidth: hasIcon === 'off' ? 1 : 8,
          borderColor: colors.text,
        }}></View>
    );
  }
  return (
    <View
      style={{
        ...styles.circle,
        backgroundColor: colors.background,
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
});
