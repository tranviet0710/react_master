import { createSlice } from "@reduxjs/toolkit"

const initialCounterState = {
    counter: 0,
    counterVisibile: true
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        decrease(state, action) {
            state.counter = state.counter - action.payload
        },
        toggle(state) {
            state.counterVisibile = !state.counterVisibile
        }
    }
})
export const { increase, decrease, toggle } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;