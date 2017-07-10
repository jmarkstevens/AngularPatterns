import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import appState from './app/app.Reducer';
import galleryState from './gallery/gallery.Reducer';
import inputState from './input/input.Reducer';
import treeState from './treeview/tree.Reducer';

const reducer = combineReducers({appState, galleryState, inputState, treeState});
let middleware = [thunkMiddleware];

const useLogger = 1;
if (useLogger) middleware.push(logger);

export const store = createStore(reducer, applyMiddleware(...middleware));
