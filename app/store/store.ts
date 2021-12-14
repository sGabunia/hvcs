import {configureStore} from '@reduxjs/toolkit';
import darkModeSlice from '../../feautures/darkmode/darkModeSlice';

const store = configureStore({
  reducer: {
    isDarkMode: darkModeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
