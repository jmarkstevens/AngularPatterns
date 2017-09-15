import {Component, ChangeDetectorRef} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

import {appNavMenuAction} from '../../store/app/app.actions';

let NavBarSty = `{
  background: #fefefe;
  line-height: 3.2em;
  overflow: hidden;
  padding: 0px;
}`;

let spanSty = `{
  cursor: pointer;
  font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'sans-serif';
  font-size: 1.5em;
  font-weight: 500;
  display: inline-block;
  Webkit-transform: scale(1.5,1);
  Moz-transform: scale(1.5,1);
  Ms-transform: scale(1.5,1);
  O-transform: scale(1.5,1);
  transform: scale(1.5,1);
}`;

const styles = [
  `.NavBar ${NavBarSty}`,
  `.navSpan ${spanSty}`,
  `.spanSpacer {padding: 0 3em;}`,
  `.standardSpan {color: #363636;}`,
  `.selectedSpan {color: #d18b1f;}`
];

let navTemplate = `
  <div class="FlexBox NavBar">
    <span class="spanSpacer">&nbsp;</span>
    <span
      id="mapPage"
      class="navSpan"
      (click)="navClick($event)"
      [ngClass]="[mapSpan]"
    >
      Map Page
    </span>
    <span class="spanSpacer">&nbsp;</span>
    <span
      id="hideMapPage"
      class="navSpan"
      (click)="navClick($event)"
      [ngClass]="[hmapSpan]"
    >
      Hide Map Page
    </span>
    <span class="spanSpacer">&nbsp;</span>
  </div>
`;

@Component({
  selector: 'Nav-Bar',
  template: navTemplate,
  styles: styles
})
export class NavBar {
  constructor(ngRedux) {
    this.ngRedux = ngRedux;
    this.appState = this.ngRedux.getState().appState;
    this.currentPage = this.appState.currentPage;
    this.mapSpan = this.currentPage === 'mapPage' ? 'selectedSpan' : 'standardSpan';
    this.hmapSpan = this.currentPage === 'hideMapPage' ? 'selectedSpan' : 'standardSpan';
  }

  navClick = event => {
    this.currentPage = event.target.id;
    this.mapSpan = this.currentPage === 'mapPage' ? 'selectedSpan' : 'standardSpan';
    this.hmapSpan = this.currentPage === 'hideMapPage' ? 'selectedSpan' : 'standardSpan';
    this.ngRedux.dispatch(appNavMenuAction(event.target.id));
  };
}
NavBar.parameters = [[NgRedux]];

// let SelectedSty = Object.assign({}, spanSty);
// SelectedSty.color = AppColors.siOrangeLite;
//
// let dashboardSty = props.fromPage === 'dashboard' ? SelectedSty : Object.assign({}, spanSty);
// let hideMapPageSty = props.fromPage === 'hideMapPage' ? SelectedSty : Object.assign({}, spanSty);
