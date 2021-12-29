import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './navigation/RootNavigator';

import {Provider} from 'react-redux';

import store from './app/store/store';
import CustomStatusBar from './components/CustomStatusBar';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
      <CustomStatusBar />
    </Provider>
  );
};

export default App;
