import {Component} from '@angular/core';

const title = 'Hello jms-tree-view';

@Component({
  selector: 'jms-tree-view',
  template: require('./jms-tree-view.html'),
  styles: [require('./jms-tree-view.css')]
})
export class jmsTreeView {
  constructor() {
    this.title = title;
  }
}
