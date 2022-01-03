import {configureStore} from '@reduxjs/toolkit';
import darkModeSlice from '../../feautures/darkmode/darkModeSlice';
import favoriteProductsSlice from '../../feautures/favoriteProducts/favoriteProductsSlice';
import modalSlice from '../../feautures/modal/modalSlice';
import productDetailsSlice from '../../feautures/productDetails/productDetailsSlice';
import productsSlice from '../../feautures/products/productsSlice';
import productsByCategorySlice from '../../feautures/productsByCategory/productsByCategorySlice';
import authSlice from '../../feautures/user/authSlice';

const store = configureStore({
  reducer: {
    isDarkMode: darkModeSlice,
    modalsState: modalSlice,
    auth: authSlice,
    products: productsSlice,
    favoriteProducts: favoriteProductsSlice,
    details: productDetailsSlice,
    categories: productsByCategorySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
