// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

export const storeToolkit = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
