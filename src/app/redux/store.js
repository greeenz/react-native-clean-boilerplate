import { createStore, applyMiddleware } from  'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import persistConfig from './persist';
import middlewares from './middlewares';
import reducer from './reducer';

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(...middlewares)
    )
)

export const persistor = persistStore(store)