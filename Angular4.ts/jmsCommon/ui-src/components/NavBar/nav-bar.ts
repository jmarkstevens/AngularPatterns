import {Component, ChangeDetectorRef} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

import {appNavMenuAction} from '../../store/app/app.actions';

@Component({
  selector: 'nav-bar',
  template: require('./nav-bar.html'),
  styles: [require('./nav-bar.css')]
})
export class NavBar {
  constructor(ngRedux) {
    this.ngRedux = ngRedux;
    this.appState = this.ngRedux.getState().appState;
    this.currentPage = this.appState.currentPage;
  }

  navClick = event => {
    this.currentPage = event.target.id;
    this.ngRedux.dispatch(appNavMenuAction(event.target.id));
  };

  getColor = page => {
    return page == this.currentPage
      ? 'selectedSpan'
      : 'standardSpan';
  }
}
NavBar.parameters = [
  [NgRedux]
];
