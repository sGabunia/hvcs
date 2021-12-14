import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../app/store/store';

const darkModeSlice = createSlice({
  name: 'isDark',
  initialState: false,
  reducers: {
    setToDarkMode: state => {
      return (state = true);
    },
    setToLightMode: state => {
      return (state = false);
    },
  },
});

export const {setToDarkMode, setToLightMode} = darkModeSlice.actions;

export const selectMode = ({isDarkMode}: RootState) => isDarkMode;

export default darkModeSlice.reducer;
