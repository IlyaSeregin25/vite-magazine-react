import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/routes';

export const getCategories = createAsyncThunk('categories/getCategories', async (payloud, thunkAPI) => {
  try {
    const response = await axios.get(`${BASE_URL}/categories`);
    return response.data;
  } catch (err) {
    console.log(err);
    return thunkAPI.rejectWithValue(err);
  }
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {},
  extraReducers: buider => {
    buider
      .addCase(getCategories.pending, () => {})
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, () => {});
  },
});

export default categoriesSlice.reducer;
export const selectorCategories = state => state.categories.categories;
