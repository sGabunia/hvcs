import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

import {useSelector} from 'react-redux';
import {selectMode} from '../feautures/darkmode/darkModeSlice';

import colors from '../utils/colors/colors';

interface Props {
  children: Element;
  isVisible: boolean;
  onPress: () => void;
  textInp?: any;
}

const ModalWrapper = ({isVisible, children, onPress, textInp}: Props) => {
  const isDark = useSelector(selectMode);
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
        <View
          style={{
            ...styles.modalOverlay,
            backgroundColor: isDark ? colors.dark : colors.light,
          }}></View>
      </TouchableWithoutFeedback>
      <View style={styles.center}>{children}</View>
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
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
