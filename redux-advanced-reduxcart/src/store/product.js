import { createSlice } from '@reduxjs/toolkit';
const initialProductState = {
    products: [
        {
            title: 'Product 1',
            price: 6,
            description: 'This is a first product - amazing!'
        },
        {
            title: 'Product 2',
            price: 7,
            description: 'This is a second product - great!'
        }
    ],
}

const productSlice = createSlice({
    name: 'product',
    initialState: initialProductState,
    reducers: {

    },
});

export const { } = productSlice.actions;

export default productSlice;
