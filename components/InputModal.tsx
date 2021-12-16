import React from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import {useSelector} from 'react-redux';
import {selectMode} from '../feautures/darkmode/darkModeSlice';

import CustomMainButton from './CustomMainButton';
import SocialNetworksButton from './SocialNetworksButton';
import WrapperWithElevetion from './WrapperWithElevetion';

import MyAppText from '../utils/text/MyAppText';
import colors from '../utils/colors/colors';

interface Props {
  title: string;
  email: string;
  password: string;
  description: string;
  type: string;
  reffer: any;
}

const InputModal = ({
  title,
  email,
  password,
  description,
  type,
  reffer,
}: Props) => {
  const isDark = useSelector(selectMode);
  return (
    <WrapperWithElevetion>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.header}>
          <MyAppText>{title}</MyAppText>
        </View>
        <View
          style={{
            ...styles.inputWrapper,
            borderColor: isDark ? colors.light : colors.dark,
          }}>
          <TextInput
            style={{
              ...styles.input,
              borderColor: isDark ? colors.light : colors.dark,
            }}
            placeholder={email}
            placeholderTextColor={isDark ? colors.light : colors.dark}
            ref={reffer}
          />
          <TextInput
            style={{
              ...styles.input,
              borderColor: isDark ? colors.light : colors.dark,
            }}
            placeholder={password}
            placeholderTextColor={isDark ? colors.light : colors.dark}
          />
          <View style={styles.registerWrapper}>
            <MyAppText>Forgot password?</MyAppText>
            <CustomMainButton onPress={() => console.log('register')}>
              {type}
            </CustomMainButton>
          </View>
        </View>
        <View style={styles.socialsWrapper}>
          <View>
            <SocialNetworksButton
              title="Continue with Google"
              icon="logo-google"
            />
            <SocialNetworksButton
              title="Continue with Facebook"
              icon="logo-facebook"
            />
            <View style={styles.actionsWrapper}>
              <View style={styles.actions}>
                <Pressable
                  style={styles.button}
                  android_ripple={{color: colors.mediumLight}}>
                  <MyAppText>
                    {description}{' '}
                    <MyAppText style={styles.type}>{type}</MyAppText>
                  </MyAppText>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </WrapperWithElevetion>
  );
};

export default InputModal;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 20,
    borderBottomWidth: 0.3,
  },
  inputWrapper: {
    paddingHorizontal: 15,
    marginBottom: 10,
    borderBottomWidth: 0.3,
    borderTopWidth: 0.3,
  },
  input: {
    height: 45,
    borderBottomWidth: 1,
    marginVertical: 7,
  },
  registerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  socialsWrapper: {
    paddingHorizontal: 15,
  },
  actionsWrapper: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  actions: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  type: {
    color: colors.social,
    fontWeight: '500',
    paddingLeft: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
