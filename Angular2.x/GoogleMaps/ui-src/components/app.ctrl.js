import {Component, ChangeDetectorRef} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

let ctrlTemplate = `
  <div class="AppCtrl">
    <Nav-Bar></Nav-Bar>
    <Map-Page *ngIf="showMapPage"></Map-Page>
  </div>
  `;

const inLine = [
  `.AppCtrl {
    height: 100%;
    overflow: hidden;
    padding: 0px;
    width: 100%;
  }`
];

@Component({
  selector: 'app-ctrl',
  template: ctrlTemplate,
  styles: inLine
})
export class AppCtrl implements OnDestroy {
  constructor(changeDetectorRef, ngRedux) {
    this.changeDetectorRef = changeDetectorRef;
    this.ngRedux = ngRedux;
    this.appState = this.ngRedux.getState().appState;
    this.currentPage = this.appState.currentPage;
    this.showMapPage = this.currentPage === 'mapPage';
    this.unsubscribe = this.ngRedux.subscribe(this.subscribeAppCtrlRedux);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  subscribeAppCtrlRedux = () => {
    this.appState = this.ngRedux.getState().appState;
    this.currentPage = this.appState.currentPage;
    this.showMapPage = this.currentPage === 'mapPage';
    this.changeDetectorRef.detectChanges();
  };
}
AppCtrl.parameters = [[ChangeDetectorRef],[NgRedux]];
