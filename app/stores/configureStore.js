/**
 * Created by alvaroviebrantz on 06/04/16.
 */
'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';

const loggerMiddleware = createLogger();

export default function configureStore(initialState){
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );
    //HMR config for Redux
    if(module.hot){        
        module.hot.accept(() => {
            const nextRootReducer = require('../reducers/index').default;            
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}

