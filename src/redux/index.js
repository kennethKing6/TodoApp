import {applyMiddleware, createStore} from 'redux';
import {combinedReducers} from './reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];

export const store = createStore(combinedReducers,applyMiddleware(...middleware));