import {Component} from '@angular/core';

const title = 'Hello jms-page-indicator';

@Component({
  selector: 'jms-page-indicator',
  template: require('./jms-page-indicator.html'),
  styles: [require('./jms-page-indicator.css')]
})
export class jmsPageIndicator {
  constructor() {
    this.title = title;
  }
}
