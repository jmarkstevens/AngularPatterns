import {apiSetTreeViewState} from '../api/api.Actions';

export function saveTreeNew(node, location) { return {type: 'SaveTreeNew', node, location}; }

export function saveTreeEdit(node) { return {type: 'SaveTreeEdit', node}; }

export function saveTreeState(payload) {
  return (dispatch) => {
    dispatch({type: 'SaveTreeState', payload});
    apiSetTreeViewState(payload);
  };
}
export function setCurrentItem(item) { return {type: 'SetCurrentItem', item}; }
export function treeActions(action, node) {
  switch (action) {
    case 'moveUp': return {type: 'MoveUp', node};
    case 'moveDown': return {type: 'MoveDown', node};
    case 'remove': return {type: 'Remove', node};
  }
}
