import {Component} from '@angular/core';

const title = 'Hello jms-tooltip';

@Component({
  selector: 'jms-tooltip',
  template: require('./jms-tooltip.html'),
  styles: [require('./jms-tooltip.css')]
})
export class jmsTooltip {
  constructor() {
    this.title = title;
  }
}
