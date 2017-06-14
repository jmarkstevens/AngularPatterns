import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

let middleware = [thunkMiddleware];

const useLogger = 1;
if (useLogger) middleware.push(logger);

const initState = {
  data1: {
    name: 'Hello Redux Fetch',
    setDateTime: new Date().toLocaleString()
  },
  data2: {
    name: 'Child component before fetch',
    setDateTime: new Date().toLocaleString()
  }
};

function mainReducer(state = initState, action) {
  switch (action.type) {
    case 'GetData1Done':
      return Object.assign({}, state, {data1: action.payload});
    case 'GetData2Done':
      return Object.assign({}, state, {data2: action.payload});
    default:
      return state;
  }
}

export const store = createStore(mainReducer, applyMiddleware(...middleware));
