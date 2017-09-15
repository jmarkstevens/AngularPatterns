import {Component} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: { '(onDestroy)': 'onDestroy()' }
})
export class AppComponent {
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
    this.ngRedux.dispatch({ type: 'GetData1Done', payload: data });
    this.divName = this.divName === 'loDiv' ? 'newDiv' : 'loDiv';
  };

  onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis = () => {
    this.data1 = this.ngRedux.getState().data1;
  };
}
AppComponent.parameters = [[NgRedux]];
