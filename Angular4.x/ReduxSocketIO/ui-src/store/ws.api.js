import * as Actions from './api.Actions';

var socket = null;

export function wsMiddleware() {
  return next => action => {
    if (socket && action.type === 'GetData1') {
      socket.emit('client:GetData1', {});
    } else if (socket && action.type === 'SetData1') {
      socket.emit('client:SetData1', action.data);
    } else if (socket && action.type === 'GetData2') {
      socket.emit('client:GetData2', {});
    } else if (socket && action.type === 'SetData2') {
      socket.emit('client:SetData2', action.data);
    }

    return next(action);
  };
}

export default function(store) {
  socket = new io();

  socket.on('server:GetData1Done', data => {
    store.dispatch(Actions.apiGetData1Done(data));
  });

  socket.on('server:SetData1Done', () => {
    store.dispatch(Actions.apiGetData1());
  });

  socket.on('server:GetData2Done', data => {
    store.dispatch(Actions.apiGetData2Done(data));
  });

  socket.on('server:SetData2Done', () => {
    store.dispatch(Actions.apiGetData2());
  });
}
