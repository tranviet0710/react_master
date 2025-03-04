const { createStore } = require("redux");
/**
 * Initilize the reducer function to mutates the data in store
 * @param {state} store the current state 
 * @param {action} store the type of action, and the payload 
 * @returns 
 */
const reducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case 'increment':
            return {
                counter: state.counter + 1
            }
        case 'decrement':
            return {
                counter: state.counter - 1
            }
        default:
            return state;
    }
}
/**
 * Initilize the store (central data)
 */
const store = createStore(reducer);

/**
 * Initialize the subscription between store and component 
 */
store.subscribe(() => console.log(store.getState()))

/**
 * Dispatch action to reducer function
 */
store.dispatch({ type: 'increment' });
store.dispatch({ type: 'decrement' });
store.dispatch({ type: 'increment' });