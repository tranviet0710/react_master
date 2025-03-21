import { createSlice } from "@reduxjs/toolkit";
import { showNotification } from "./ui";
const initialCartState = {
  items: [
    // { id: 1, title: 'Product 1', quantity: 3, total: 18, price: 6 },
    // { id: 2, title: 'Product 2', quantity: 2, total: 14, price: 7 },
  ],
  isVisible: true,
  changed: false,
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
      state.changed = true;
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
      state.changed = true;
      if (existingItem.quantity === 0) {
        state.items = state.items.filter((i) => i.id !== item.id);
      }
    },
    increaseItem(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      existingItem.quantity += 1;
      existingItem.total += item.price;
      state.changed = true;
    },
    replaceCart(state, action) {
      state.items = action.payload.items || [];
      state.isVisible = action.payload.isVisible;
    },
  },
});

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-cart-64aad-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to send cart data");
      }
    };
    try {
      await sendRequest();
      dispatch(
        showNotification({
          status: "success",
          title: "Success...",
          message: "Send cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error...",
          message: "Failed to send cart data: " + error.message,
        })
      );
    }
  };
};

export const fetchCart = () => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "Fetching...",
        message: "Fetching cart data",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-cart-64aad-default-rtdb.firebaseio.com/cart.json",
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch cart data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await sendRequest();
      console.log(cartData);
      dispatch(replaceCart(cartData));
      dispatch(
        showNotification({
          status: "success",
          title: "Success...",
          message: "Fetch cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error...",
          message: "Failed to fetch cart data: " + error.message,
        })
      );
    }
  };
};

export const { toggle, addToCart, replaceCart, reduceItem, increaseItem } =
  cartSlice.actions;
export default cartSlice;
