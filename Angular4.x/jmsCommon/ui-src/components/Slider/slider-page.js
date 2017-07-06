import {Component} from '@angular/core';

const title = 'Hello slider-page';

@Component({
  selector: 'slider-page',
  template: require('./slider-page.html'),
  styles: [require('./slider-page.css')]
})
export class SliderPage {
  singleIndex = 10;
  outData1 = {min: 0, max: 100};
  lowIndex = 10;
  highIndex = 80;
  
  onSingleChanged = index => {
    this.singleIndex = index;
  }
  onLowChanged = index => {
    this.lowIndex = index;
  }
  onHighChanged = index => {
    this.highIndex = index;
  }
}
