import {Component, ChangeDetectorRef} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

import {apiSetData2} from '../store/api.Actions';

let ctrlTemplate = `
  <div class="hiDiv" [ngClass]="[divName]">
    <h1>{{data2.name}}</h1>
    <h2>{{data2.setDateTime}}</h2>
    <div (click)="changeIt()">Click here to change</div>
  </div>
  `;

const inLine = ['.hiDiv {text-align: center;}', '.loDiv {color: orange;}', '.newDiv {color: NavajoWhite;}'];

@Component({
  selector: 'app-child',
  template: ctrlTemplate,
  styles: inLine
})
export class AppChild implements OnDestroy {
  constructor(changeDetectorRef, ngRedux) {
    this.changeDetectorRef = changeDetectorRef;
    this.ngRedux = ngRedux;
    this.data2 = this.ngRedux.getState().data2;
    this.unsubscribe = this.ngRedux.subscribe(this.subscribeToRedux2);
    this.divName = 'loDiv';
  }

  changeIt = () => {
    const newData = {
      name: 'Hello Child after dispatch.',
      setDateTime: new Date().toLocaleString()
    };

    this.ngRedux.dispatch(apiSetData2(newData));
    this.divName = this.divName === 'loDiv' ? 'newDiv' : 'loDiv';
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  subscribeToRedux2 = () => {
    this.data2 = this.ngRedux.getState().data2;
    this.changeDetectorRef.detectChanges();
  }
}
AppChild.parameters = [[ChangeDetectorRef], [NgRedux]];
