import {createStore} from 'https://cdn.skypack.dev/redux';

const initialState = 0;

// reducer
function reducer(state = initialState, action){
    switch (action.type){
        case 'WITHDRAW':
            return state = state - action.payload
        case 'DEPOSIT':
            return state = state + action.payload
        default:
            return state
    }
}

// store
const store = window.store = createStore(reducer)

// dispatch
$('#withdraw').click(function (e) { 
    e.preventDefault();
    store.dispatch({
        type: 'WITHDRAW',
        payload: parseInt($('#amount').val())    
    });
});


$('#deposite').click(function (e) {
    e.preventDefault();
    store.dispatch({
        type: 'DEPOSIT',
        payload: parseInt($('#amount').val())    
    });
});

// subscribe
function render(){
    $('#money').text(store.getState())
}

store.subscribe(() => render())