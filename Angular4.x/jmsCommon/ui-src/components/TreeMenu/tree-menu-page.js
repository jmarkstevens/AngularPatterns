import {Component, ChangeDetectorRef} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

@Component({
  selector: 'tree-menu-page',
  template: require('./tree-menu-page.html'),
  styles: [require('./tree-menu-page.css')]
})
export class TreeMenuPage implements OnDestroy {
  currentValue = '';
  icons = ['./img/sun.ico', './img/leaf.ico', './img/snow.ico'];
  level = 'nodeLevel';
  
  constructor(changeDetectorRef, ngRedux) {
    this.changeDetectorRef = changeDetectorRef;
    this.ngRedux = ngRedux;
    this.unsubscribe = this.ngRedux.subscribe(this.subscribeToState);
    this.subscribeToState(1);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  onIndexChanged = item => {
    let title = item.title;
    this.currentValue = title;
    this.changeDetectorRef.detectChanges();
  }
  
  subscribeToState = first => {
    this.menuList = this.ngRedux.getState().treeState.menuList;
    let isCurrentPage = this.ngRedux.getState().appState.currentPage === 'TreeMenuPage';
    if (!first && isCurrentPage) this.changeDetectorRef.detectChanges();
  }
}
TreeMenuPage.parameters = [[ChangeDetectorRef], [NgRedux]];
