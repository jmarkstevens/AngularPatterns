import logger from 'redux-logger';

export let middleware = [];

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
