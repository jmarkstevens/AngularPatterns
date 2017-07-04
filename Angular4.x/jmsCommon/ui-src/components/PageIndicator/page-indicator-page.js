import {Component} from '@angular/core';

const title = 'Hello page-indicator-page';

@Component({
  selector: 'page-indicator-page',
  template: require('./page-indicator-page.html'),
  styles: [require('./page-indicator-page.css')]
})
export class PageIndicatorPage {
  outData = {count: 3, currentIndex: 0};

  onValueChanged = newValue => {
    this.outData.currentIndex = newValue;
  };
}
