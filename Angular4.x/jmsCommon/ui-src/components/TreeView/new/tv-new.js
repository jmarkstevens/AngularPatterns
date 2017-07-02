import {Component} from '@angular/core';

const title = 'Hello tv-new';

@Component({
  selector: 'tv-new',
  template: require('./tv-new.html'),
  styles: [require('./tv-new.css')]
})
export class TreeViewNew {
  constructor() {
    this.title = title;
  }
}
