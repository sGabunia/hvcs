import React from 'react';
import RootNavigator from './navigation/RootNavigator';
import {Provider} from 'react-redux';
import store from './app/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
