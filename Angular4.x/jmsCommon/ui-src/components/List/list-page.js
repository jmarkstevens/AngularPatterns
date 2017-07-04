import {Component} from '@angular/core';
import {listData} from './list.data';

@Component({
  selector: 'list-page',
  template: require('./list-page.html'),
  styles: [require('./list-page.css')]
})
export class ListPage {
  listData1 = {};
  listData2 = {};
  listData3 = {};
  listData4 = {};
  listData5 = {};
  constructor() {
    this.listData1.list = listData.list;
    this.listData2.list = listData.list;
    this.listData2.rootStyle = listData.listSty;
    this.listData3.list = listData.list;
    this.listData3.lineStyle = listData.lineSty;
    this.listData4.list = listData.list;
    this.listData4.type = 'span';
    this.listData5.type = 'span';
    this.listData5.rootStyle = listData.listSty;
    this.listData5.list = listData.list;
    this.listData5.lineStyle = listData.lineSty;
  }
}
