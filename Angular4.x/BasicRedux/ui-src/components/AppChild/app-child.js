import {Component} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

@Component({
  selector: 'app-child',
  template: require('./app-child.html'),
  styles: [require('./app-child.css')]
})
export class AppChild implements OnDestroy {
  constructor(ngRedux) {
    this.ngRedux = ngRedux;
    this.unsubscribe = ngRedux.subscribe(this.mapStateToThis);
    this.mapStateToThis();
    this.divName = 'loDiv';
  }
  changeIt = () => {
    let data = {
      name: 'Hello Redux child',
      setDateTime: new Date().toLocaleString()
    };
    this.ngRedux.dispatch({type: 'GetData2Done', payload: data});
    this.divName = this.divName === 'loDiv' ? 'newDiv' : 'loDiv';
    console.log('this.state: ', this.state);
  };

  ngOnDestroy() {
    this.unsubscribe();
  }

  mapStateToThis = () => {
    this.data2 = this.ngRedux.getState().data2;
  };
}
AppChild.parameters = [[NgRedux]];
