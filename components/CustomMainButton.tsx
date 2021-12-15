import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useSelector} from 'react-redux';
import {selectMode} from '../feautures/darkmode/darkModeSlice';
import colors from '../utils/colors/colors';
interface Props {
  children: Element;
  onPress?: () => void;
}

const CustomMainButton = ({children, onPress}: Props) => {
  const isDark = useSelector(selectMode);
  return (
    <View style={styles.buttonWraper}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: colors.medium}}
        style={{
          ...styles.button,
          backgroundColor: isDark ? colors.light : colors.dark,
        }}>
        <Text
          style={{...styles.text, color: isDark ? colors.dark : colors.light}}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
};

export default CustomMainButton;

const styles = StyleSheet.create({
  buttonWraper: {
    overflow: 'hidden',
    borderRadius: 50,
    alignSelf: 'center',
  },
  button: {
    padding: 14,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
  },
  ripple: {
    color: colors.medium,
  },
});
