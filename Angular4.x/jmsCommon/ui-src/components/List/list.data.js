const list = [
  'line one of list',
  'another line of list',
  'third line of list',
  'fourth line of list',
  'fifth line of list',
  'sixth line of list'
];
const rootStyle = {
  border: '1px solid #e9e7da',
  margin: '10px 10px'
};
const lineStyle = {
  color: '#b4dbc0',
  marginLeft: '5px'
};
const type = 'span';
export const listData = {
  listData1: {list},
  listData2: {list, rootStyle},
  listData3: {list, lineStyle},
  listData4: {list, type},
  listData5: {list, type, lineStyle, rootStyle}
}
