import {RootState} from './../../app/store/store';
import {Product} from './../products/productsSlice';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface InitialProps {
  product: Product;
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string;
}

const initialState: InitialProps = {
  product: {} as Product,
  status: 'idle',
  error: '',
};

export const fetchProductDetails = createAsyncThunk(
  'details/fetchProductDetails',
  async (productId: string) => {
    console.log(productId);
    const response = await axios.get(
      `https://teamwork-ecommerce.herokuapp.com/product/product?productId=${productId}`,
    );
    return response.data;
  },
);

const productDetailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    resetProductDetails: state => {
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProductDetails.pending, state => {
        state.status = 'pending';
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.product = action.payload;
      })
      .addCase(fetchProductDetails.rejected, state => {
        state.status = 'failed';
        state.error = 'no data received';
      });
  },
});

export const {resetProductDetails} = productDetailsSlice.actions;

export const selectProductDetails = (state: RootState) => state.details;

export default productDetailsSlice.reducer;
