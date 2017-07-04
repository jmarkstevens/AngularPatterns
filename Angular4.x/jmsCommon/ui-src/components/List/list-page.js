import {Component} from '@angular/core';
import {listData} from './list.data';

@Component({
  selector: 'list-page',
  template: require('./list-page.html'),
  styles: [require('./list-page.css')]
})
export class ListPage {
  listData1 = listData.listData1;
  listData2 = listData.listData2;
  listData3 = listData.listData3;
  listData4 = listData.listData4;
  listData5 = listData.listData5;
}
