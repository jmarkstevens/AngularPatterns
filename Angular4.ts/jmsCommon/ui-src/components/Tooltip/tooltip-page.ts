import {Component} from '@angular/core';

const title = 'Hello tooltip-page';

@Component({
  selector: 'tooltip-page',
  template: require('./tooltip-page.html'),
  styles: [require('./tooltip-page.css')]
})
export class TooltipPage {
  constructor() {
    this.title = title;
  }
}
