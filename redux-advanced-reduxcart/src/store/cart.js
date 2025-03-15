import { createSlice } from "@reduxjs/toolkit";
const initialCartState = {
  items: [
    // { id: 1, title: 'Product 1', quantity: 3, total: 18, price: 6 },
    // { id: 2, title: 'Product 2', quantity: 2, total: 14, price: 7 },
  ],
  isVisible: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.total += newItem.price;
      } else {
        state.items.push(newItem);
      }
    },
    reduceItem(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      existingItem.quantity -= 1;
      existingItem.total -= item.price;
      if (existingItem.quantity === 0) {
        state.items = state.items.filter((i) => i.id !== item.id);
      }
    },
    increaseItem(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      existingItem.quantity += 1;
      existingItem.total += item.price;
    },
  },
});

export const { toggle, addToCart, reduceItem, increaseItem } =
  cartSlice.actions;
export default cartSlice;
