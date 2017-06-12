import {Component} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

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
  styles: inLine,
  host: {'(onDestroy)': 'onDestroy()'}
})
export class AppCtrl {
  constructor(ngRedux) {
    this.ngRedux = ngRedux;
    this.data1 = this.ngRedux.getState().data1;
    this.unsubscribe = ngRedux.subscribe(this.mapStateToThis);
    this.divName = 'loDiv';
    this.show = false;
  }
  changeIt = () => {
    let data = {
      name: 'Hello Redux',
      setDateTime: new Date().toLocaleString()
    };
    this.ngRedux.dispatch({type: 'GetData1Done', payload: data});
    this.divName = this.divName === 'loDiv' ? 'newDiv' : 'loDiv';
  };

  onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis = () => {
    this.data1 = this.ngRedux.getState().data1;
  };
}
AppCtrl.parameters = [[NgRedux]];
