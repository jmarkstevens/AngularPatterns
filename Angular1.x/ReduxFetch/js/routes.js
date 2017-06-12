'use strict';

const express = require('express');
const router = express.Router();

const getSetData = require('./routes/GetSetData');

router.get('/getData', function(req, res) {
  const getDataDone = function(data){ res.send(data); };
  getSetData.getData(getDataDone);
});

router.post('/setData', function(req, res) {
  const setDataDone = function(data){ res.send(data); };
  getSetData.setData(req.body, setDataDone);
});

module.exports = router;
