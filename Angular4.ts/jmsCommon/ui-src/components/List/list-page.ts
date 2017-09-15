import {Component} from '@angular/core';

const title = 'Hello list-page';

@Component({
  selector: 'list-page',
  template: require('./list-page.html'),
  styles: [require('./list-page.css')]
})
export class ListPage {
  constructor() {
    this.title = title;
  }
}
