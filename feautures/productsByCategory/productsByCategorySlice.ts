import {RootState} from './../../app/store/store';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Product} from './../products/productsSlice';

interface InitialStateType {
  products: Product[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string;
}

const initialState: InitialStateType = {
  products: [],
  status: 'idle',
  error: '',
};

export const fetchProductsByCategory = createAsyncThunk(
  'categories/fetchProductsByCategory',
  async (category: 'Handmade' | 'Furniture') => {
    console.log(category);
    const response = await axios.get(
      `https://teamwork-ecommerce.herokuapp.com/product?limit=10&category=${category}`,
    );

    console.log(response.data);

    return response.data;
  },
);

const productsByCategorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProductsByCategory.pending, state => {
        state.status = 'pending';
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload.products;
      })
      .addCase(fetchProductsByCategory.rejected, state => {
        state.status = 'failed';
        state.error = 'No data loaded';
      });
  },
});

export const selectProductsByCategory = (state: RootState) => state.categories;

export default productsByCategorySlice.reducer;
