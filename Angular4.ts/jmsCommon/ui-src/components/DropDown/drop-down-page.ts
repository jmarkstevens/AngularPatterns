import {Component} from '@angular/core';

const title = 'Hello dropdown-page';

@Component({
  selector: 'drop-down-page',
  template: require('./drop-down-page.html'),
  styles: [require('./drop-down-page.css')]
})
export class DropDownPage {
  constructor() {
    this.title = title;
  }
}
