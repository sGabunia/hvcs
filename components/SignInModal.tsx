import React, {useRef} from 'react';
import {
  Modal,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {useSelector} from 'react-redux';
import {selectMode} from '../feautures/darkmode/darkModeSlice';

import InputModal from './InputModal';
import colors from '../utils/colors/colors';

interface Props {
  isOpen: boolean;
  onPress: () => void;
}

const SignInOrRegisterModal = ({isOpen, onPress}: Props) => {
  const textInp = useRef<TextInput>();
  const isDark = useSelector(selectMode);
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
        <View
          style={{
            ...styles.modalOverlay,
            backgroundColor: isDark ? colors.dark : colors.light,
          }}></View>
      </TouchableWithoutFeedback>
      <View style={styles.center}>
        <InputModal
          title="Sign in"
          email="Email or Username"
          password="Password"
          description="Don't have an account?"
          type="Register"
          reffer={textInp}
        />
      </View>
    </Modal>
  );
};

export default SignInOrRegisterModal;

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
