import { createSlice } from '@reduxjs/toolkit';
const initialProductState = {
    products: [
        {
            id: 1,
            title: 'Product 1',
            price: 6,
            description: 'This is a first product - amazing!'
        },
        {
            id: 2,
            title: 'Product 2',
            price: 7,
            description: 'This is a second product - great!'
        }, {
            id: 3,
            title: 'Product 3',
            price: 8,
            description: 'This is a third product - good!'
        }
    ],
}

const productSlice = createSlice({
    name: 'product',
    initialState: initialProductState,
});

export default productSlice;
