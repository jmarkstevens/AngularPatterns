import {Component} from '@angular/core';

const title = 'Hello tv-actions';

@Component({
  selector: 'tv-actions',
  template: require('./tv-actions.html'),
  styles: [require('./tv-actions.css')]
})
export class TreeViewActions {
  constructor() {
    this.title = title;
  }
}
