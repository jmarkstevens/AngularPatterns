import {Component} from '@angular/core';

const title = 'Hello jms-single-slider';

@Component({
  selector: 'jms-single-slider',
  template: require('./jms-single-slider.html'),
  styles: [require('./jms-single-slider.css')]
})
export class jmsSingleSlider {
  constructor() {
    this.title = title;
  }
}
