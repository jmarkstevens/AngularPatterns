import {Component} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

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
  styles: inLine,
  host: {
    '(onDestroy)': 'onDestroy()'
  }
})
export class AppChild {
  constructor(ngRedux) {
    this.ngRedux = ngRedux;
    this.data2 = this.ngRedux.getState().data2;
    this.unsubscribe = ngRedux.subscribe(this.mapStateToThis);
    this.divName = 'loDiv';
  }
  changeIt = () => {
    let data = {
      name: 'Hello Redux child',
      setDateTime: new Date().toLocaleString()
    };
    this.ngRedux.dispatch({type: 'GetData2Done', payload: data});
    this.divName = this.divName === 'loDiv' ? 'newDiv' : 'loDiv';
  };

  onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis = () => {
    this.data2 = this.ngRedux.getState().data2;
  };
}
AppChild.parameters = [[NgRedux]];
