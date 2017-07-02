import {Component, ChangeDetectorRef} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

@Component({
  selector: 'app-component',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent implements OnDestroy {
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
AppComponent.parameters = [[ChangeDetectorRef], [NgRedux]];
