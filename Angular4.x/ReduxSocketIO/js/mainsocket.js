'use strict';

const getSetData = require('./socket/GetSetData');

module.exports = function(socket) {
  socket.on('client:GetData1', function() {
    const getDataDone = function(data){ socket.emit('server:GetData1Done', data); };
    getSetData.getData('getSet1', getDataDone);
  });

  socket.on('client:SetData1', function(data) {
    const setDataDone = function(data){ socket.emit('server:SetData1Done'); };
    getSetData.setData('getSet1', data, setDataDone);
  });

  socket.on('client:GetData2', function() {
    const getDataDone = function(data){ socket.emit('server:GetData2Done', data); };
    getSetData.getData('getSet2', getDataDone);
  });

  socket.on('client:SetData2', function(data) {
    const setDataDone = function(data){ socket.emit('server:SetData2Done'); };
    getSetData.setData('getSet2', data, setDataDone);
  });
};
