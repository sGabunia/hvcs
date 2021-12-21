import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Wrapper from '../utils/wrapper/Wrapper';

interface Props {
  children: Element;
}

const LoadingAndErrorWrapper = ({children}: Props) => {
  return (
    <Wrapper>
      <View style={styles.center}>{children}</View>
    </Wrapper>
  );
};

export default LoadingAndErrorWrapper;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
