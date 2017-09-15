'use strict';

const express = require('express');
const router = express.Router();

const getSetData = require('./routes/GetSetData');

router.get('/getData1', function(req, res) {
  const getDataDone = function(data){ res.send(data); };
  getSetData.getData('getSet1', getDataDone);
});

router.post('/setData1', function(req, res) {
  const setDataDone = function(data){ res.send(data); };
  getSetData.setData('getSet1', req.body, setDataDone);
});

router.get('/getData2', function(req, res) {
  const getDataDone = function(data){ res.send(data); };
  getSetData.getData('getSet2', getDataDone);
});

router.post('/setData2', function(req, res) {
  const setDataDone = function(data){ res.send(data); };
  getSetData.setData('getSet2', req.body, setDataDone);
});

module.exports = router;
