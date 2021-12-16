import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import SignInModal from '../components/SignInModal';
import BeforeSignIn from '../components/BeforeSignIn';

import Wrapper from '../utils/wrapper/Wrapper';

const UpdatesScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const text = 'Sign in to stay up to date on your favorite items and shops.';
  return (
    <Wrapper>
      <SignInModal isOpen={isModalOpen} onPress={closeModal} />
      <View style={styles.center}>
        <BeforeSignIn
          title="No updates ...yet."
          description={text}
          buttonTitle="Sign in"
          icon="newspaper-outline"
          onPress={openModal}
        />
      </View>
    </Wrapper>
  );
};

export default UpdatesScreen;

const styles = StyleSheet.create({
  center: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
