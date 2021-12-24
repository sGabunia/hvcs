import React from 'react';
import {KeyboardAvoidingView, Pressable, StyleSheet, View} from 'react-native';

import {useForm} from 'react-hook-form';

import {useSelector} from 'react-redux';
import {selectMode} from '../feautures/darkmode/darkModeSlice';

import CustomMainButton from './CustomMainButton';
import SocialNetworksButton from './SocialNetworksButton';
import WrapperWithElevetion from './WrapperWithElevetion';

import MyAppText from '../utils/text/MyAppText';
import colors from '../utils/colors/colors';
import {selectError} from '../feautures/user/authSlice';
import CustomInput from './CustomInput';

interface Props {
  title: string;
  email: string;
  password: string;
  description: string;
  type: string;
  reffer?: any;
  handleRegisterModalOpen: () => void;
  handleSubmitData: (data: {
    username: string;
    email: string;
    password: string;
  }) => void;
}

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const InputModal = ({
  title,
  email,
  password,
  description,
  type,
  reffer,
  handleRegisterModalOpen,
  handleSubmitData,
}: Props) => {
  const isDark = useSelector(selectMode);
  const error = useSelector(selectError);

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const pswd = watch('password');

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
            <CustomInput
              name="username"
              placeholder="Username"
              rules={{
                required: 'Username is required',
                minLength: {
                  value: 3,
                  message: 'Username should be minimum 3 characters',
                },
              }}
              control={control}
            />
          )}

          <CustomInput
            name="email"
            placeholder={email}
            rules={{
              required: 'Email or username is required',
              minLength: {
                value: 3,
                message: 'Username should be minimum 3 characters',
              },
              pattern: {
                value: EMAIL_REGEX,
                message: 'Email is invalid',
              },
            }}
            control={control}
            reffer={reffer}
          />

          <CustomInput
            name="password"
            placeholder={password}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 4,
                message: 'Password must be minimum 4 characters',
              },
            }}
            control={control}
            passwordShown={true}
          />

          {title === 'Register' && (
            <CustomInput
              name="password repeat"
              placeholder="Repeat Password"
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 4,
                  message: 'Password must be minimum 4 characters',
                },
                validate: value => value === pswd || 'Password do not match',
              }}
              control={control}
              passwordShown={true}
            />
          )}

          {title === 'Sign in' ? (
            <View>
              <View style={styles.registerWrapper}>
                <MyAppText>Forgot password?</MyAppText>
                <CustomMainButton onPress={handleSubmit(handleSubmitData)}>
                  {title}
                </CustomMainButton>
              </View>
              {error && <MyAppText>Wrong data</MyAppText>}
            </View>
          ) : (
            <View>
              <View style={styles.registerButtonWrapper}>
                <CustomMainButton onPress={handleSubmit(handleSubmitData)}>
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
