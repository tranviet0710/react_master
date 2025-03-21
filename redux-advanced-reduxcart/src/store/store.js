import cartSlice from "./cart";
import productSlice from "./product";
import uiSlice from "./ui";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
  },
});
