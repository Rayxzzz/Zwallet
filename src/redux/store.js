import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducers from './reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistedReducer = persistReducer({key: 'root', storage}, rootReducers)

// eslint-disable-next-line import/no-anonymous-default-export

export let store = createStore(persistedReducer, applyMiddleware(thunk, logger))
export let persistor = persistStore(store)
