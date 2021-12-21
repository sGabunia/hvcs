import React from 'react';
import {
  ActivityIndicator,
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
import {selecLoadingStatus, selectError} from '../feautures/user/authSlice';

interface Props {
  title: string;
  email: string;
  password: string;
  description: string;
  type: string;
  reffer?: any;
  handleRegisterModalOpen: () => void;
  usernameValue?: string;
  emailValue: string;
  passwordValue: string;
  handleUsernameChange?: (text: any) => void;
  handleEmailChange: (text: any) => void;
  handlePasswordChange: (text: any) => void;
  handleSubmit: () => void;
}

const InputModal = ({
  title,
  email,
  password,
  description,
  type,
  reffer,
  handleRegisterModalOpen,
  usernameValue,
  emailValue,
  passwordValue,
  handleUsernameChange,
  handlePasswordChange,
  handleEmailChange,
  handleSubmit,
}: Props) => {
  const isDark = useSelector(selectMode);
  const isLoading = useSelector(selecLoadingStatus);
  const error = useSelector(selectError);

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
          {title === 'Register' && (
            <TextInput
              style={{
                ...styles.input,
                borderColor: isDark ? colors.light : colors.dark,
              }}
              placeholder="First Name"
              placeholderTextColor={isDark ? colors.light : colors.dark}
              value={usernameValue}
              onChangeText={text => handleUsernameChange?.(text)}
              ref={reffer}
            />
          )}
          <TextInput
            style={{
              ...styles.input,
              borderColor: isDark ? colors.light : colors.dark,
            }}
            placeholder={email}
            placeholderTextColor={isDark ? colors.light : colors.dark}
            value={emailValue}
            onChangeText={text => handleEmailChange(text)}
            ref={reffer}
          />
          <TextInput
            style={{
              ...styles.input,
              borderColor: isDark ? colors.light : colors.dark,
            }}
            placeholder={password}
            placeholderTextColor={isDark ? colors.light : colors.dark}
            value={passwordValue}
            onChangeText={text => handlePasswordChange(text)}
          />
          {title === 'Sign in' ? (
            <View>
              <View style={styles.registerWrapper}>
                <MyAppText>Forgot password?</MyAppText>
                <CustomMainButton onPress={handleSubmit}>
                  {title}
                  {isLoading && <ActivityIndicator color={'#fff'} />}
                </CustomMainButton>
              </View>
              {error && <MyAppText>Wrong data</MyAppText>}
            </View>
          ) : (
            <View>
              <View style={styles.registerButtonWrapper}>
                <CustomMainButton onPress={handleSubmit}>
                  Register
                </CustomMainButton>
              </View>

              <MyAppText style={styles.terms}>
                By registering, you confirm that you accept our{' '}
                <MyAppText style={styles.terms}>
                  Terms of Use and Privacy Policy
                </MyAppText>
              </MyAppText>
            </View>
          )}
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
                  onPress={handleRegisterModalOpen}
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
  registerButtonWrapper: {
    alignSelf: 'stretch',
    paddingVertical: 12,
  },
  terms: {
    fontSize: 12,
    marginBottom: 10,
  },
});
