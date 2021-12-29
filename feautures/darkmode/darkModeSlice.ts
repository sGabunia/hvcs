import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store/store';

const initialState = 'light';

const darkModeSlice = createSlice({
  name: 'isDark',
  initialState,
  reducers: {
    setToDarkMode: state => {
      return (state = 'dark');
    },
    setToLightMode: state => {
      return (state = 'light');
    },
  },
});

export const {setToDarkMode, setToLightMode} = darkModeSlice.actions;

export const selectMode = ({isDarkMode}: RootState) => isDarkMode;

export default darkModeSlice.reducer;
