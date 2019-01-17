import { connectRouter } from 'connected-react-router';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { history, middleware } from './router';


import { persistReducer, persistStore } from 'redux-persist'; // 

import storage from 'redux-persist/lib/storage';

import { smartObjectReducer, smartObjectSaga } from '../store/smartobject';
import { userReducer, userSaga } from '../store/user';

import { scenarioReducer, scenarioSaga} from '../store/scenarios'

import { headerReducer, headerSaga} from '../store/header';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = connectRouter(history)(
    combineReducers({
        headerReducer,
        scenarioReducer,
        smartObjectReducer,
        userReducer,
    }));

const pReducer = persistReducer(persistConfig, rootReducer);


// REDUX DEV TOOLS EXTENSION ABILITY --- MAYBE REMOVE IN PROD ?? YES
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    pReducer,
    // rootReducer,
    {}, // initial state
    composeEnhancers(applyMiddleware(middleware, sagaMiddleware)));

export const persistor = persistStore(store);

sagaMiddleware.run(smartObjectSaga);
sagaMiddleware.run(userSaga);
sagaMiddleware.run(scenarioSaga);
sagaMiddleware.run(headerSaga);
