import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './root-reducer';
import sagas from './root-saga';

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        name: 'SprintCrowd',
        actionsBlacklist: ['REDUX_STORAGE_SAVE']
    }) : compose;



const config = {
    key: 'root',
    storage,
    blacklist: [],
    debug: true
};

const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

const enhancers = [applyMiddleware(...middleware)];
const reducers = persistCombineReducers(config, rootReducers);


// // const initialState = {};
const persistConfig = { enhancers };
const store = createStore(reducers, composeEnhancers(...enhancers));
const persistor = persistStore(store, persistConfig)
const configureStore = () => {
    return { persistor, store };
};

sagaMiddleware.run(sagas);

export default configureStore;
