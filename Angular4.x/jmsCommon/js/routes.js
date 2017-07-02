'use strict';

const express = require('express');
const router = express.Router();

const getSetData = require('./routes/GetSetData');
const getPicList = require('./routes/GetPicList');

router.get('/getPicList', function(req, res) {
  const gotPicList = function(data){ res.send(data); };
  getPicList.getPicList(gotPicList);
});

router.get('/getAppData', function(req, res) {
  const getDataDone = function(data){ res.send(data); };
  getSetData.getAppData('AppData', getDataDone);
});

router.get('/getImageList', function(req, res) {
  const getDataDone = function(data){ res.send(data); };
  getSetData.getImageList('ImageList', getDataDone);
});

router.get('/getTreeView', function(req, res) {
  const getDataDone = function(data){ res.send(data); };
  getSetData.getTreeView('TreeView', getDataDone);
});

router.post('/setAppData', function(req) { getSetData.setAppData('AppData', req.body); });
router.post('/setTreeView', function(req) { getSetData.setTreeView('TreeView', req.body); });

router.get('/getInputData', function(req, res) {
  const getDataDone = function(data){ res.send(data); };
  getSetData.getInputData('inputs', getDataDone);
});

router.post('/setInputData', function(req) {
  getSetData.setInputData('inputs', req.body);
});

module.exports = router;
