import {applyMiddleware, createStore} from 'redux';
import {combinedReducers} from './reducers';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';



const middleware = [thunk];
//persisit store 
const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
  }
  

const persistedReducer = persistReducer(persistConfig, combinedReducers)


export const store = createStore(persistedReducer,applyMiddleware(...middleware));


export const persistor = persistStore(store)
