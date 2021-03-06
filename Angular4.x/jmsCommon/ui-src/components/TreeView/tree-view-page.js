import {Component, ChangeDetectorRef} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

import {saveTreeState, setCurrentItem, treeActions} from '../../store/treeview/tree.Actions';

@Component({
  selector: 'tree-view-page',
  template: require('./tree-view-page.html'),
  styles: [require('./tree-view-page.css')]
})
export class TreeViewPage {
  currentItem = {};
  iconOptions = {icons: {dev: './img/sun.ico', sys: './img/leaf.ico', home: './img/snow.ico'}, node: 'type'};
  titleColors = {normal: 'Wheat', selected: 'Aquamarine'};
  tvState = {};
  
  constructor(changeDetectorRef, ngRedux) {
    this.changeDetectorRef = changeDetectorRef;
    this.ngRedux = ngRedux;
    this.unsubscribe = this.ngRedux.subscribe(this.subscribeToState);
    this.subscribeToState(1);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  onItemSelected = item => {
    this.ngRedux.dispatch(setCurrentItem(item));
    this.ngRedux.dispatch(saveTreeState(this.tvState));
  }

  subscribeToState = first => {
    this.treeList = this.ngRedux.getState().treeState.treeData;
    this.tvState = this.ngRedux.getState().treeState.tvState;
    this.currentItem = this.ngRedux.getState().treeState.currentTreeNode;
    let isCurrentPage = this.ngRedux.getState().appState.currentPage === 'TreeViewPage';
    if (!first && isCurrentPage) this.changeDetectorRef.detectChanges();
  }
}
TreeViewPage.parameters = [[ChangeDetectorRef], [NgRedux]];
