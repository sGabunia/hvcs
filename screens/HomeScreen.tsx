import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import BeforeSignIn from '../components/BeforeSignIn';
import SignInModal from '../components/SignInModal';
import Wrapper from '../utils/wrapper/Wrapper';

const HomeScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const text =
    'Sign in to save ypur favorites and get personalized recommendations.';
  return (
    <Wrapper>
      <SignInModal isOpen={isModalOpen} onPress={closeModal} />
      <View style={styles.center}>
        <BeforeSignIn
          title="Welcome to Hvcs!"
          description={text}
          buttonTitle="Get started"
          icon="search-outline"
          onPress={openModal}
        />
      </View>
    </Wrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  center: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
