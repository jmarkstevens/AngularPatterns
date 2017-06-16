import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import appState from './app/app.Reducer';
import mapState from './map/map.Reducer';

const reducer = combineReducers({appState, mapState});
let middleware = [];

const useLogger = 1;
if (useLogger) middleware.push(logger);

export const store = createStore(reducer, applyMiddleware(...middleware));
