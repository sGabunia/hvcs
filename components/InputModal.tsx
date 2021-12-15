import React from 'react';
import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import colors from '../utils/colors/colors';
import MyAppText from '../utils/text/MyAppText';
import CustomMainButton from './CustomMainButton';
import SocialNetworksButton from './SocialNetworksButton';
import WrapperWithElevetion from './WrapperWithElevetion';

interface Props {
  title: string;
  email: string;
  password: string;
  description: string;
  type: string;
}

const InputModal = ({title, email, password, description, type}: Props) => {
  return (
    <WrapperWithElevetion>
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.header}>
          <MyAppText>{title}</MyAppText>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput style={styles.input} placeholder={email} />
          <TextInput style={styles.input} placeholder={password} />
          <View style={styles.registerWrapper}>
            <MyAppText>Forgot password?</MyAppText>
            <CustomMainButton>{type}</CustomMainButton>
          </View>
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
  inputWrapper: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  input: {
    height: 45,
    borderBottomWidth: 1,
    marginVertical: 7,
  },
  header: {
    padding: 15,
    borderBottomWidth: 0.3,
  },
  registerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionsWrapper: {
    alignItems: 'center',
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
