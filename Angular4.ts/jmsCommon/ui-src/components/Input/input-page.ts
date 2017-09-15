import {Component} from '@angular/core';

const title = 'Hello input-page';

@Component({
  selector: 'input-page',
  template: require('./input-page.html'),
  styles: [require('./input-page.css')]
})
export class InputPage {
  constructor() {
    this.title = title;
  }
}
