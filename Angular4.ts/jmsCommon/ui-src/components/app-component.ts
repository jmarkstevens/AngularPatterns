import {Component, ChangeDetectorRef} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

@Component({
  selector: 'app-component',
  template: require('./app-component.html'),
  styles: [require('./app-component.css')]
})
export class AppComponent implements OnDestroy {
  constructor(changeDetectorRef, ngRedux) {
    this.changeDetectorRef = changeDetectorRef;
    this.ngRedux = ngRedux;
    this.unsubscribe = this.ngRedux.subscribe(this.subscribeAppCtrlRedux);
    this.subscribeAppCtrlRedux(1);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  subscribeAppCtrlRedux = first => {
    this.currentPage = this.ngRedux.getState().appState.currentPage;
    if (!first) this.changeDetectorRef.detectChanges();
  };
}
AppComponent.parameters = [[ChangeDetectorRef],[NgRedux]];
