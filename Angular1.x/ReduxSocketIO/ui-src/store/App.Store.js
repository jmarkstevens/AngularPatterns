import logger from 'redux-logger';
import startWs, {wsMiddleware} from './ws.api';

export let middleware = [wsMiddleware];

const useLogger = 1;
if (useLogger) middleware.push(logger);

const initState = {
  data1: {
    name: 'Hello SocketIO World',
    setDateTime: new Date().toLocaleString()
  }
};

export function mainReducer(state = initState, action) {
  switch (action.type) {
    case 'GetData1Done':
      return Object.assign({}, state, {data1: action.data});
    default:
      return state;
  }
}
