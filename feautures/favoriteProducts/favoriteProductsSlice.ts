import {RootState} from './../../app/store/store';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {addToFavoriteProducts, Product} from '../products/productsSlice';

interface InitialStateType {
  favoriteProducts: Product[];
  status: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string;
}

const initialState = {
  favoriteProducts: [],
  status: 'idle',
  error: '',
} as InitialStateType;

export const fetchFavoriteProducts = createAsyncThunk(
  'favorites/fetchFavoriteProducts',
  async (_, {getState, dispatch}) => {
    const {
      auth: {userId},
    } = getState() as {auth: {userId: string}};

    const response = await axios.get(
      `https://teamwork-ecommerce.herokuapp.com/product/favorite?userId=${userId}`,
    );

    return response.data;
  },
);

export const addToFavorites = createAsyncThunk(
  'favorites/addToFavorites',
  async (postId: string, {getState, dispatch}) => {
    dispatch(addToFavoriteProducts(postId));
    const {
      auth: {userId},
    } = getState() as {auth: {userId: string}};

    const response = await axios.post(
      'https://teamwork-ecommerce.herokuapp.com/product/favorite/add',
      {userId, postId},
    );

    console.log(response);
  },
);

const favoriteProductsSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFavoriteProducts.pending, state => {
        state.status = 'pending';
      })
      .addCase(fetchFavoriteProducts.fulfilled, (state, action) => {
        const {favorite} = action.payload;
        const newArr = favorite.map((item: {productId: Product}) => ({
          ...item.productId,
          isFavorite: true,
        }));
        state.status = 'succeeded';
        state.favoriteProducts = [...state.favoriteProducts, ...newArr];
      })
      .addCase(fetchFavoriteProducts.rejected, state => {
        state.status = 'failed';
        state.error = 'Network Error';
      });
  },
});

export const selectFavoriteProducts = (state: RootState) =>
  state.favoriteProducts.favoriteProducts;
export const selectFavoriteProductsStatus = (state: RootState) =>
  state.favoriteProducts.status;
export const selectFavoriteProductsError = (state: RootState) =>
  state.favoriteProducts.error;

export default favoriteProductsSlice.reducer;
