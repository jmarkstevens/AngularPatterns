import {Action, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

let middleware = [];

const useLogger = 1;
if (useLogger) middleware.push(logger);

interface AppState {
  data1: {
    name: string,
    setDateTime: string
  },
  data2: {
    name: string,
    setDateTime: string
  }
}

const initState: AppState = {
  data1: {
    name: 'Hello Redux',
    setDateTime: new Date().toLocaleString()
  },
  data2: {
    name: 'Hello Redux child',
    setDateTime: new Date().toLocaleString()
  }
};

function mainReducer(state = initState, action: Action) {
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
