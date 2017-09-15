import {Component} from '@angular/core';

const title = 'Hello tree-view-page';

@Component({
  selector: 'tree-view-page',
  template: require('./tree-view-page.html'),
  styles: [require('./tree-view-page.css')]
})
export class TreeViewPage {
  constructor() {
    this.title = title;
  }
}
