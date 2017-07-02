import {Component, ChangeDetectorRef} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

import {apiSetData1} from '../store/api.Actions';

@Component({
  selector: 'app-component',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent implements OnDestroy {
  constructor(changeDetectorRef, ngRedux) {
    this.changeDetectorRef = changeDetectorRef;
    this.ngRedux = ngRedux;
    this.data1 = this.ngRedux.getState().data1;
    this.unsubscribe = this.ngRedux.subscribe(this.subscribeToRedux1);
    this.divName = 'loDiv';
    this.show = true;
  }
  changeIt = () => {
    let data = {
      name: 'Hello Parent after dispatch',
      setDateTime: new Date().toLocaleString()
    };
    this.ngRedux.dispatch(apiSetData1(data));
    this.divName = this.divName === 'loDiv' ? 'newDiv' : 'loDiv';
  };

  ngOnDestroy() {
    this.unsubscribe();
  }

  subscribeToRedux1 = () => {
    this.data1 = this.ngRedux.getState().data1;
    this.changeDetectorRef.detectChanges();
  };
}
AppComponent.parameters = [
  [ChangeDetectorRef],
  [NgRedux]
];
