import {Component} from '@angular/core';

const options = [
  {value: 'new', label: 'New'},
  {value: 'edit', label: 'Edit'},
  {type: 'seperator', key: '100'},
  {value: 'moveUp', label: 'Move up'},
  {value: 'moveDown', label: 'Move down'},
  {type: 'seperator', key: '101'},
  {value: 'rename', label: 'Rename'},
  {type: 'seperator', key: '102'},
  {value: 'remove', label: 'Remove'},
  {value: 'edit', label: 'Edit'},
  {type: 'seperator', key: '100'},
  {value: 'moveUp', label: 'Move up'},
  {value: 'moveDown', label: 'Move down'},
  {type: 'seperator', key: '101'},
  {value: 'rename', label: 'Rename'},
  {type: 'seperator', key: '102'},
  {value: 'remove', label: 'Remove'}
];

@Component({
  selector: 'angular-core-page',
  template: require('./angular-core-page.html'),
  styles: [require('./angular-core-page.css')]
})
export class AngularCorePage {
  options = options;
}
