import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

import MyAppText from '../utils/text/MyAppText';
import CustomMainButton from './CustomMainButton';

import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors/colors';
import {selectMode} from '../feautures/darkmode/darkModeSlice';

interface Props {
  title: string;
  description: string;
  buttonTitle: string;
  icon?: string;
  onPress?: () => void;
}

const BeforeSignIn = ({
  title,
  description,
  buttonTitle,
  icon,
  onPress,
}: Props) => {
  const isDark = useSelector(selectMode);
  return (
    <View>
      <View style={styles.textWrapper}>
        {icon && (
          <View
            style={{
              ...styles.iconBackground,
              backgroundColor: isDark ? colors.medium : colors.mediumLight,
            }}>
            <Ionicons
              name={icon}
              size={60}
              color={isDark ? colors.light : colors.dark}
            />
          </View>
        )}

        <MyAppText style={styles.title}>{title}</MyAppText>
        <MyAppText style={styles.description}>{description}</MyAppText>
      </View>
      <CustomMainButton onPress={onPress}>{buttonTitle}</CustomMainButton>
    </View>
  );
};

export default BeforeSignIn;

const styles = StyleSheet.create({
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    paddingVertical: 20,
  },
  description: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    marginBottom: 12,
  },
  iconBackground: {
    backgroundColor: colors.mediumLight,
    padding: 20,
    borderRadius: 50,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
