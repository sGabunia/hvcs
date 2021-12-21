import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import IonIcons from 'react-native-vector-icons/Ionicons';

import MyAppText from '../utils/text/MyAppText';

const GalleryHeader = ({children}: {children: Element}) => {
  return (
    <Pressable>
      <MyAppText>{children}</MyAppText>
      <IonIcons name="arrow-forward" size={24} />
    </Pressable>
  );
};

export default GalleryHeader;

const styles = StyleSheet.create({});
