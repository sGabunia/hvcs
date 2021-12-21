import {selectError} from './../user/authSlice';
import {RootState} from './../../app/store/store';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';

export interface Product {
  userId: string;
  title: string;
  description: string;
  primaryImage: string;
  imageList: string[];
  price: number;
  ammount: number;
  rating: number;
  category: string;
  _v?: number;
  _id: string;
}

interface InitialStateType {
  products: Product[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string;
}

const initialState = {
  products: [],
  status: 'idle',
  error: '',
} as InitialStateType;

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await axios.post(
        `https://teamwork-ecommerce.herokuapp.com/product`,
      );
      const {products} = response.data;

      return products;
    } catch (error) {
      console.log(error);
      return 'errdfsdfsdfsdr';
    }
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    emptyProductList: state => {
      state.products = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'pending';
      })
      .addCase(fetchProducts.fulfilled, (state, {payload}) => {
        state.status = 'succeeded';
        state.products = [...state.products, ...payload];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'Network Error';
      });
  },
});

export const {emptyProductList} = productsSlice.actions;

export const selectLoadingStatus = (state: RootState) => state.products.status;

export const selectProducts = (state: RootState) => state.products.products;

export const selectSingleProduct = (id: string) => (state: RootState) =>
  state.products.products.find(product => product._id === id);

export const selectErrorState = (state: RootState) => state.products.error;

export default productsSlice.reducer;
