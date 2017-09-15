import {Component} from '@angular/core';

const title = 'Hello jms-list';

@Component({
  selector: 'jms-list',
  template: require('./jms-list.html'),
  styles: [require('./jms-list.css')]
})
export class jmsList {
  constructor() {
    this.title = title;
  }
}
