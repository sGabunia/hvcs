import React from 'react';
import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';

import colors from '../utils/colors/colors';

import {useTheme} from '@react-navigation/native';
interface Props {
  children: Element;
  onPress: () => void;
  style?: ViewStyle;
}

const CustomMainButton = ({children, onPress, style}: Props) => {
  const {colors} = useTheme();

  return (
    <View style={styles.buttonWraper}>
      <Pressable
        onPress={onPress}
        style={{
          ...styles.button,
          backgroundColor: colors.text,
          ...style,
        }}>
        <Text style={{...styles.text, color: colors.background}}>
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
    marginBottom: 15,
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
