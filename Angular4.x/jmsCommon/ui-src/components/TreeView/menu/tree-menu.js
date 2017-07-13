import {Component, ChangeDetectorRef} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

@Component({
  selector: 'tree-menu',
  template: require('./tree-menu.html'),
  styles: [require('./tree-menu.css')]
})
export class TreeMenu implements OnDestroy {
  currentItem = {};
  iconOptions = {icons: {0: './img/chevron-right.png', 1: './img/chevron-down.png'}, node: 'showChildren'};
  titleColors = {normal: 'Wheat', selected: 'Aquamarine'};
  tvState = {id: 'nodeid', selected: '', showChildren: {}};
  
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
    this.currentItem = item;
    // this.tvState.selected = item[this.tvState.id];
    this.changeDetectorRef.detectChanges();
  }
  
  subscribeToState = first => {
    this.treeList = this.ngRedux.getState().treeState.treeData;
    let isCurrentPage = this.ngRedux.getState().appState.currentPage === 'TreeViewPage';
    if (!first && isCurrentPage) this.changeDetectorRef.detectChanges();
  }
}
TreeMenu.parameters = [[ChangeDetectorRef], [NgRedux]];
