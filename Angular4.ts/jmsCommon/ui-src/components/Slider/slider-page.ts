import {Component} from '@angular/core';

const title = 'Hello slider-page';

@Component({
  selector: 'slider-page',
  template: require('./slider-page.html'),
  styles: [require('./slider-page.css')]
})
export class SliderPage {
  constructor() {
    this.title = title;
  }
}
