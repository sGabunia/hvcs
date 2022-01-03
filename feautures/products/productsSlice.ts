import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './../../app/store/store';
import axios from 'axios';

export interface Product {
  userId: string;
  title: string;
  description: string;
  imageId: {
    primaryImage?: string;
  };
  imageList: string[];
  price: number;
  ammount: number;
  rating: number;
  category: string;
  _v?: number;
  _id: string;
  isFavorite?: boolean;
  username?: string;
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
    const response = await axios.get(
      `https://teamwork-ecommerce.herokuapp.com/product?limit=20`,
    );
    return response.data;
  },
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    emptyProductList: state => {
      state.products = [];
      state.status = 'idle';
    },
    addToFavoriteProducts: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingProduct = state.products.find(
        product => product._id === id,
      );
      if (existingProduct) {
        existingProduct.isFavorite = true;
      }
    },
    removeFromFavoriteProducts: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingProduct = state.products.find(
        product => product._id === id,
      );
      if (existingProduct) {
        existingProduct.isFavorite = false;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'pending';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const {products} = action.payload;
        const newArr = products.map((product: Product) => ({
          ...product,
          isFavorite: false,
        }));
        state.status = 'succeeded';
        state.products = [...state.products, ...newArr];
      })
      .addCase(fetchProducts.rejected, state => {
        state.status = 'failed';
        state.error = 'Network Error';
      });
  },
});

export const {
  emptyProductList,
  addToFavoriteProducts,
  removeFromFavoriteProducts,
} = productsSlice.actions;

export const selectLoadingStatus = (state: RootState) => state.products.status;

export const selectProducts = (state: RootState) => state.products.products;

export const selectSingleProduct = (id: string) => (state: RootState) =>
  state.products.products.find(product => product._id === id);

export const selectErrorState = (state: RootState) => state.products.error;

export default productsSlice.reducer;
