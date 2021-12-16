import React from 'react';
import {Pressable, StyleSheet} from 'react-native';

import {useSelector} from 'react-redux';
import {selectMode} from '../feautures/darkmode/darkModeSlice';

import CustomSwitchButton from './CustomSwitchButton';

import colors from '../utils/colors/colors';

interface Props {
  children: Element;
  onPress?: () => void;
  hasIcon?: 'on' | 'off';
}

const CustomRippleButton = ({hasIcon, children, onPress}: Props) => {
  const isDark = useSelector(selectMode);
  return (
    <Pressable
      style={styles.button}
      android_ripple={{color: isDark ? colors.mediumLight : colors.medium}}
      onPress={onPress}>
      {children}
      {hasIcon && <CustomSwitchButton hasIcon={hasIcon} />}
    </Pressable>
  );
};

export default CustomRippleButton;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
