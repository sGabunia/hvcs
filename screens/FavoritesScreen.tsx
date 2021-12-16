import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import SignInModal from '../components/SignInModal';
import BeforeSignIn from '../components/BeforeSignIn';

import Wrapper from '../utils/wrapper/Wrapper';

const FavoritesScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const text = 'Sign in to save your favorite items, searches and shops.';

  return (
    <Wrapper>
      <SignInModal isOpen={isModalOpen} onPress={closeModal} />
      <View style={styles.center}>
        <BeforeSignIn
          title="Nothing here ... yet."
          description={text}
          buttonTitle="Sign in"
          icon="heart-outline"
          onPress={openModal}
        />
      </View>
    </Wrapper>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  center: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
