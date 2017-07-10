import {ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'jms-tree-menu',
  template: require('./jms-tree-menu.html'),
  styles: [require('./jms-tree-menu.css')]
})
export class jmsTreeMenu {
  @Input()menuList = [{}];
  @Input()level = '';
  @Input()icons = [''];
  @Output()onIndexChanged = new EventEmitter();

  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
  }
  iconClick = item => {
    if (item.children) {
      item.itemVisible = !item.itemVisible;
      this.changeDetectorRef.detectChanges();
    } else {
      this.titleClick(item);
    }
  }
  titleClick = item => {
    this.onIndexChanged.emit(item);
  }
  getIconBack = item => {
    if (item.children) {
      let level = item[this.level] - 1;
      let iconBack = this.icons[level];
      return iconBack;
    } else {
      return './img/1x1TransShim.gif';
    }
  }
}
jmsTreeMenu.parameters = [
  [ChangeDetectorRef]
];
