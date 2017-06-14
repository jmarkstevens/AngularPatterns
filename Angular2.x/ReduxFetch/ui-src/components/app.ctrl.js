import {Component, ChangeDetectorRef} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

import {apiSetData1} from '../store/api.Actions';

let ctrlTemplate = `
  <div class="hiDiv" [ngClass]="[divName]">
    <h1>{{data1.name}}</h1>
    <h2>{{data1.setDateTime}}</h2>
    <div (click)="changeIt()">Click here to change</div>
    <br />
    <div>
      <div class="btnDiv">
        <button (click)="show = !show">{{show ? 'hide' : 'show'}} child component</button>
      </div>
    </div>
    <br />
  </div>
  <br />
  <br />
  <app-child *ngIf="show"></app-child>
  `;

const inLine = [
  '.hiDiv {text-align: center;}',
  '.loDiv {color: MediumSeaGreen;}',
  '.newDiv {color: gold;}',
  '.btnDiv {color: black; margin: 10px auto; width: auto;}'
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
AppCtrl.parameters = [[ChangeDetectorRef],[NgRedux]];
