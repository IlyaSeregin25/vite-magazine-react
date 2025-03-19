import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app/appSlice';
import productsReducer from './products/productsSlice';
import categoriesReducer from './categories/categoriesSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    products: productsReducer,
    categories: categoriesReducer,
  },
});
