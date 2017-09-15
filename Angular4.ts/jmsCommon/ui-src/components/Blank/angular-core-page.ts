import {Component} from '@angular/core';

const title = 'Hello jms-page';

@Component({
  selector: 'jms-page',
  template: require('./jms-page.html'),
  styles: [require('./jms-page.css')]
})
export class jmsPage {
  constructor() {
    this.title = title;
  }
}
