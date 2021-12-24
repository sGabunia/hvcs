import {configureStore} from '@reduxjs/toolkit';
import darkModeSlice from '../../feautures/darkmode/darkModeSlice';
import favoriteProductsSlice from '../../feautures/favoriteProducts/favoriteProductsSlice';
import modalSlice from '../../feautures/modal/modalSlice';
import productsSlice from '../../feautures/products/productsSlice';
import authSlice from '../../feautures/user/authSlice';

const store = configureStore({
  reducer: {
    isDarkMode: darkModeSlice,
    modalsState: modalSlice,
    auth: authSlice,
    products: productsSlice,
    favoriteProducts: favoriteProductsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
