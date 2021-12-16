import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import MyAppText from '../utils/text/MyAppText';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors/colors';
interface Props {
  title: string;
  icon: string;
}

const SocialNetworksButton = ({icon, title}: Props) => {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable
        style={styles.socialButton}
        onPress={() => console.log('heloo')}
        android_ripple={{color: colors.socialDark}}>
        <Ionicons name={icon} size={16} color={colors.light} />
        <MyAppText style={styles.title}>{title}</MyAppText>
      </Pressable>
    </View>
  );
};

export default SocialNetworksButton;

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  socialButton: {
    backgroundColor: colors.social,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 12,
    marginVertical: 7,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: colors.light,
  },
});
