import React, {useEffect, useRef} from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import InputModal from './InputModal';

interface Props {
  isOpen: boolean;
  onPress: () => void;
}

const SignInOrRegisterModal = ({isOpen, onPress}: Props) => {
  const textInp = useRef<any>();
  return (
    <Modal
      visible={isOpen}
      animationType="fade"
      onShow={() => {
        setTimeout(() => {
          console.log('modal');
          textInp?.current?.focus();
        }, 100);
      }}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.center}>
          <InputModal
            title="Sign in"
            email="Email or Username"
            password="Password"
            description="Don't have an account?"
            type="Register"
          />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default SignInOrRegisterModal;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
