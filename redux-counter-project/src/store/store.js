import { createStore } from 'redux';

// initial state
const initialState = {
    counter: 0,
    counterVisibile: true
}

// create reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increase':
            return {
                ...state,
                counter: state.counter + action.amount
            }
        case 'decrease':
            return {
                ...state,
                counter: state.counter - action.amount
            }
        case 'toggle':
            return {
                ...state,
                counterVisibile: !state.counterVisibile
            }
        default:
            return { ...state };
    }
}

// create store
const store = createStore(reducer);

export default store;
