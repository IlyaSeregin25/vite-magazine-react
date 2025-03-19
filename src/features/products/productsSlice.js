import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/routes';

export const getProducts = createAsyncThunk('products/getProducts', async (userId, thunkAPI) => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
});

export const getProductsFiltered = createAsyncThunk('products/getProductsFiltered', async (payload, thunkAPI) => {
  const { categoryId = '', price_min = '1', price_max = '1000000', title = '' } = payload;
  const url = `${BASE_URL}/products/?categoryId=${categoryId}&price_min=${price_min}&price_max=${price_max}&title=${title}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const getProductsRelated = createAsyncThunk('products/getProductsRelated', async (id, thunkAPI) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}/related`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

export const getProductsById = createAsyncThunk('products/getProductsById', async (id, thunkAPI) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: false,
    filteredList: [],
    product: {},
    relatedList: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, state => {
        state.isLoading = false;
      });
    builder
      .addCase(getProductsFiltered.pending, () => {})
      .addCase(getProductsFiltered.fulfilled, (state, action) => {
        state.filteredList = action.payload;
      })
      .addCase(getProductsFiltered.rejected, () => {});
    builder.addCase(getProductsById.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(getProductsRelated.fulfilled, (state, action) => {
      state.relatedList = action.payload;
    });
  },
});

export default productsSlice.reducer;
export const selectorProducts = state => state.products.products;
export const selectorFilteredProducts = state => state.products.filteredList;
export const selectorProduct = state => state.products.product;
export const selectorRelatedProducts = state => state.products.relatedList;
