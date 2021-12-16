import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import SignInModal from '../components/SignInModal';
import BeforeSignIn from '../components/BeforeSignIn';
import PersonOptions from '../components/PersonOptions';

import Wrapper from '../utils/wrapper/Wrapper';

const PersonScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const description =
    'Sign in to contact sellers, track your purchases and get personalized recommendations';
  return (
    <Wrapper>
      <SignInModal isOpen={isModalOpen} onPress={closeModal} />
      <View style={styles.wrapper}>
        <BeforeSignIn
          title="Get the most out of Hvcs"
          description={description}
          buttonTitle="Sign in"
          onPress={openModal}
        />
        <View style={{marginBottom: 30}}></View>
        <PersonOptions />
      </View>
    </Wrapper>
  );
};

export default PersonScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
});
