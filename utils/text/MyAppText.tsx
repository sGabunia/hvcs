import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

import {useTheme} from '@react-navigation/native';
interface Props {
  children: Element | undefined;
  style?: TextStyle;
}

const MyAppText: React.FC<Props> = ({children, style}) => {
  const {colors} = useTheme();

  return (
    <Text
      style={{
        ...styles.text,
        color: colors.text,
        ...style,
      }}>
      {children}
    </Text>
  );
};

export default MyAppText;

const styles = StyleSheet.create({
  text: {fontSize: 16, marginBottom: 4},
});
