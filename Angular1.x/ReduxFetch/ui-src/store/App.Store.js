import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export let middleware = [thunkMiddleware];

const useLogger = 1;
if (useLogger) middleware.push(logger);

const initState = {
  data1: {
    name: 'Hello Redux World',
    setDateTime: new Date().toLocaleString()
  }
};

export function mainReducer(state = initState, action) {
  switch (action.type) {
    case 'GetData1Done':
      return Object.assign({}, state, {data1: action.payload});
    default:
      return state;
  }
}
