import {Component} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

@Component({
  selector: 'app-component',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')]
})
export class AppComponent implements OnDestroy {
  divName = 'loDiv';
  show = false;

  constructor(ngRedux) {
    this.ngRedux = ngRedux;
    this.data1 = this.ngRedux.getState().data1;
    this.unsubscribe = ngRedux.subscribe(this.mapStateToThis);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }
  
  changeIt = () => {
    let data = {
      name: 'Hello Redux',
      setDateTime: new Date().toLocaleString()
    };
    this.ngRedux.dispatch({type: 'GetData1Done', payload: data});
    this.divName = this.divName === 'loDiv'
      ? 'newDiv'
      : 'loDiv';
  };

  mapStateToThis = () => {
    this.data1 = this.ngRedux.getState().data1;
  };
}
AppComponent.parameters = [
  [NgRedux]
];
