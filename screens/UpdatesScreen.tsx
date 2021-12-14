import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import MyAppText from '../utils/text/MyAppText';
import Wrapper from '../utils/wrapper/Wrapper';

const UpdatesScreen = () => {
  return (
    <Wrapper>
      <View>
        <MyAppText>Update</MyAppText>
      </View>
    </Wrapper>
  );
};

export default UpdatesScreen;

const styles = StyleSheet.create({});
