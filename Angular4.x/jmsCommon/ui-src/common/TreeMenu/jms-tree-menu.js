import {Component} from '@angular/core';

const title = 'Hello jms-tree-menu';

@Component({
  selector: 'jms-tree-menu',
  template: require('./jms-tree-menu.html'),
  styles: [require('./jms-tree-menu.css')]
})
export class jmsTreeMenu {
  constructor() {
    this.title = title;
  }
}
