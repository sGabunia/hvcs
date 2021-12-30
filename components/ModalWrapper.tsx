import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {useTheme} from '@react-navigation/native';

interface Props {
  children: Element;
  isVisible: boolean;
  onPress: () => void;
  textInp?: any;
}

const ModalWrapper = ({isVisible, children, onPress, textInp}: Props) => {
  const {colors} = useTheme();
  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      onShow={() => {
        setTimeout(() => {
          textInp?.current?.focus();
        }, 100);
      }}>
      <TouchableWithoutFeedback onPress={onPress}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{
            ...styles.modalOverlay,
            backgroundColor: colors.background,
          }}>
          <View style={styles.center}>{children}</View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalWrapper;

const styles = StyleSheet.create({
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#000',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
