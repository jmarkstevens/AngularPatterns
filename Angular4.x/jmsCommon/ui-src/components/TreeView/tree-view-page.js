import {Component, ChangeDetectorRef} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

@Component({
  selector: 'tree-view-page',
  template: require('./tree-view-page.html'),
  styles: [require('./tree-view-page.css')]
})
export class TreeViewPage implements OnDestroy {
  title = 'TreeViewPage';
  
  constructor(changeDetectorRef, ngRedux) {
    this.changeDetectorRef = changeDetectorRef;
    this.ngRedux = ngRedux;
    this.unsubscribe = this.ngRedux.subscribe(this.subscribeToState);
    this.subscribeToState(1);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  subscribeToState = first => {
    this.treeList = this.ngRedux.getState().treeState.treeList;
    if (!first) this.changeDetectorRef.detectChanges();
  }
}
TreeViewPage.parameters = [[ChangeDetectorRef], [NgRedux]];
