import {Component} from '@angular/core';

const title = 'Hello tv-detail';

@Component({
  selector: 'tv-detail',
  template: require('./tv-detail.html'),
  styles: [require('./tv-detail.css')]
})
export class TreeViewDetail {
  constructor() {
    this.title = title;
  }
}
