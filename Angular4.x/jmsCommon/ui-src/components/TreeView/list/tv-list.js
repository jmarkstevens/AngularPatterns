import {Component} from '@angular/core';

const title = 'Hello tv-list';

@Component({
  selector: 'tv-list',
  template: require('./tv-list.html'),
  styles: [require('./tv-list.css')]
})
export class TreeViewList {
  constructor() {
    this.title = title;
  }
}
