import cartSlice from "./cart";
import productSlice from "./product";
import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        cart: cartSlice.reducer
    }
});