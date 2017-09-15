import {Component} from '@angular/core';

const title = 'Hello tree-menu-page';

@Component({
  selector: 'tree-menu-page',
  template: require('./tree-menu-page.html'),
  styles: [require('./tree-menu-page.css')]
})
export class TreeMenuPage {
  constructor() {
    this.title = title;
  }
}
