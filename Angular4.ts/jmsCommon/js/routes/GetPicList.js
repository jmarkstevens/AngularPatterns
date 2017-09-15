'use strict';

const exiftool = require('node-exiftool');

const fieldList = [
  'FileName',
  'Description',
  'Copyright',
];

module.exports.getPicList = function(doneCallBack) {
  const ep = new exiftool.ExiftoolProcess();
  const picFolder = './ui-dist/data/_sm';

  const getFileListCallBack = function(fileList) {
    const lgPicFolder = '../data/_lg/';
    const smPicFolder = '../data/_sm/';
    let picList = [];
    const addObject = {lgFolder: lgPicFolder, smFolder: smPicFolder};
    fileList.forEach(function(value){ picList.push(Object.assign(value, addObject)); });
    doneCallBack({picList});
  };
  ep.open().then(() => ep.readMetadata(picFolder, fieldList))
    .then((outout) => { getFileListCallBack(outout.data); ep.close(); });
};
