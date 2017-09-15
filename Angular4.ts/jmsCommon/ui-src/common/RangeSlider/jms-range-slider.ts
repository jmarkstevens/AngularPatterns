import {Component} from '@angular/core';

const title = 'Hello jms-range-slider';

@Component({
  selector: 'jms-range-slider',
  template: require('./jms-range-slider.html'),
  styles: [require('./jms-range-slider.css')]
})
export class jmsRangeSlider {
  constructor() {
    this.title = title;
  }
}
