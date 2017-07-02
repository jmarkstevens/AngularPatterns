import {Component} from '@angular/core';

const title = 'Hello jms-progress-bar';

@Component({
  selector: 'jms-progress-bar',
  template: require('./jms-progress-bar.html'),
  styles: [require('./jms-progress-bar.css')]
})
export class jmsProgressBar {
  constructor() {
    this.title = title;
  }
}
