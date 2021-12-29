import React from 'react';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {selectMode} from '../feautures/darkmode/darkModeSlice';

const CustomStatusBar = () => {
  const colorScheme = useSelector(selectMode) === 'dark';
  return (
    <StatusBar barStyle={colorScheme ? 'light-content' : 'dark-content'} />
  );
};

export default CustomStatusBar;
