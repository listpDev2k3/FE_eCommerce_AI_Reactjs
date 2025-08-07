// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import favoritesReducer from './favorites/favoritesSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

console.log('Store được tạo:', store.getState());
