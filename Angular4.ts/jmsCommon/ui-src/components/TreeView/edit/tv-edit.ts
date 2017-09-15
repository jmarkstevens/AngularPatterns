import {Component} from '@angular/core';

const title = 'Hello tv-edit';

@Component({
  selector: 'tv-edit',
  template: require('./tv-edit.html'),
  styles: [require('./tv-edit.css')]
})
export class TreeViewEdit {
  constructor() {
    this.title = title;
  }
}
