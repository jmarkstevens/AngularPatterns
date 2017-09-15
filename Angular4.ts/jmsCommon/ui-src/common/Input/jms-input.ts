import {Component} from '@angular/core';

const title = 'Hello jms-input';

@Component({
  selector: 'jms-input',
  template: require('./jms-input.html'),
  styles: [require('./jms-input.css')]
})
export class jmsInput {
  constructor() {
    this.title = title;
  }
}
