import {createStore, applyMiddleware} from 'redux';
import startWs, {wsMiddleware} from './ws.api';
import logger from 'redux-logger';

let middleware = [wsMiddleware];

const useLogger = 1;
if (useLogger) middleware.push(logger);

const initState = {
  data1: {
    name: 'Hello Redux SocketIO',
    setDateTime: new Date().toLocaleString()
  },
  data2: {
    name: 'Child component before SocketIO',
    setDateTime: new Date().toLocaleString()
  }
};

function mainReducer(state = initState, action) {
  switch (action.type) {
    case 'GetData1Done':
      return Object.assign({}, state, {data1: action.data});
    case 'GetData2Done':
      return Object.assign({}, state, {data2: action.data});
    default:
      return state;
  }
}

export const store = createStore(mainReducer, applyMiddleware(...middleware));

startWs(store);
