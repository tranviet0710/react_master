import { createSlice } from '@reduxjs/toolkit';
const initialCartState = {
    items: [
        { title: 'Product 1', quantity: 3, total: 18, price: 6 },
        { title: 'Product 2', quantity: 2, total: 14, price: 7 },
    ],
    totalAmount: 0,
    isVisible: function () { return this.items.length !== 0; }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        toggle(state) {
            state.isVisible = !state.isVisible;
        }
    }
})

export const { toggle } = cartSlice.actions;
export default cartSlice;