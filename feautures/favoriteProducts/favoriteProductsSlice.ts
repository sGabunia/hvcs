import {RootState} from './../../app/store/store';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  addToFavoriteProducts,
  Product,
  removeFromFavoriteProducts,
} from '../products/productsSlice';

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
      auth: {token},
    } = getState() as {auth: {token: string}};

    const response = await axios.get(
      `https://teamwork-ecommerce.herokuapp.com/product/favorite`,
      {
        headers: {
          token: token,
        },
      },
    );

    return response.data;
  },
);

export const addToFavorites = createAsyncThunk(
  'favorites/addToFavorites',
  async (postId: string, {getState, dispatch}) => {
    dispatch(addToFavoriteProducts(postId));

    const {
      auth: {token},
    } = getState() as {auth: {token: string}};

    const response = await axios.post(
      'https://teamwork-ecommerce.herokuapp.com/product/favorite/add',
      {postId},
      {
        headers: {
          token,
        },
      },
    );

    return postId;
  },
);

export const removeFromFavorites = createAsyncThunk(
  'favorites/removeFromFavorites',
  async (postId: string, {getState, dispatch}) => {
    dispatch(removeFromFavoriteProducts(postId));

    const {
      auth: {token},
    } = getState() as {auth: {token: string}};

    const response = await axios.delete(
      `https://teamwork-ecommerce.herokuapp.com/product/deletefav?postId=${postId}`,
      {
        headers: {
          token,
        },
      },
    );

    return postId;
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
        const {favoritePosts} = action.payload.favorite;

        const newArr = favoritePosts.map((item: Product) => ({
          ...item,
          isFavorite: true,
        }));

        state.status = 'succeeded';
        state.favoriteProducts = newArr;
      })
      .addCase(fetchFavoriteProducts.rejected, state => {
        state.status = 'failed';
        state.error = 'Network Error';
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        const id = action.payload;
        const existingProduct = state.favoriteProducts.find(
          product => product._id === id,
        );
        if (existingProduct) {
          existingProduct.isFavorite = true;
        }
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        const id = action.payload;
        const existingProduct = state.favoriteProducts.find(
          product => product._id === id,
        );
        if (existingProduct) {
          existingProduct.isFavorite = false;
        }
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
