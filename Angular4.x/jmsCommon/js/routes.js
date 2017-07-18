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
  getSetData.getData('AppData', getDataDone);
});

router.get('/getImageList', function(req, res) {
  const getDataDone = function(data){ res.send(data); };
  getSetData.getData('ImageList', getDataDone);
});

router.get('/getTreeView', function(req, res) {
  const getDataDone = function(data){ res.send(data); };
  getSetData.getData('TreeView', getDataDone);
});

router.get('/getTreeViewState', function(req, res) {
  const getDataDone = function(data){ res.send(data); };
  getSetData.getData('TreeViewState', getDataDone);
});

router.post('/setAppData', function(req) { getSetData.setData('AppData', req.body); });
router.post('/setTreeView', function(req) { getSetData.setData('TreeView', req.body); });
router.post('/setTreeViewState', function(req) { getSetData.setData('TreeViewState', req.body); });

router.get('/getInputData', function(req, res) {
  const getDataDone = function(data){ res.send(data); };
  getSetData.getData('inputs', getDataDone);
});

router.post('/setInputData', function(req) { getSetData.setData('inputs', req.body); });

module.exports = router;
