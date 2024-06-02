// store.js
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import userSaga from './userSaga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const storeSaga = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(userSaga);

export default storeSaga;
