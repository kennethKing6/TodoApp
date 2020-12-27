import {createStore} from 'redux';
import {combinedReducers} from './reducers';


export default store = createStore(combinedReducers);