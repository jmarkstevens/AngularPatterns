import {Component} from '@angular/core';

let assignSty = {color: 'Khaki'};
let progressCount = 120;

@Component({
  selector: 'progress-bar-page',
  template: require('./progress-bar-page.html'),
  styles: [require('./progress-bar-page.css')]
})
export class ProgressBarPage {
  firstItemBtn = {buttonid: 'first', icon: 'fa fa-fast-backward fa-lg', classes: 'Icon', style: assignSty};
  previousItemBtn = {buttonid: 'previous', icon: 'fa fa-backward fa-lg', classes: 'Icon', style: assignSty};
  nextItemBtn = {buttonid: 'next', icon: 'fa fa-forward fa-lg', classes: 'Icon', style: assignSty};
  lastItemBtn = {buttonid: 'last', icon: 'fa fa-fast-forward fa-lg', classes: 'Icon', style: assignSty};
  progressIndex = 10;
  outData1 = {count: progressCount};
  outData2 = {count: progressCount, indexColor: '#155765'};
  outData3 = {count: progressCount, countColor: '#155765'};
  outData4 = {count: progressCount, height: .8};
  outData5 = {count: progressCount, position: 'after'};
  outData6 = {count: progressCount, position: 'before'};
  outData7 = {count: progressCount, position: 'beforenafter'};
  outData8 = {count: progressCount, position: 'none'};
  outData9 = {count: progressCount};

  clickHandler = btnObject => {
    let oldIndex = this.progressIndex;
    let newIndex = oldIndex;
    switch (btnObject.buttonid) {
      case 'first': newIndex = 1; break;
      case 'previous': newIndex -= oldIndex > 1 ? 1 : 0; break;
      case 'next': newIndex += oldIndex < progressCount ? 1 : 0; break;
      case 'last': newIndex = progressCount; break;
    }
    this.progressIndex = newIndex;
  };
}
