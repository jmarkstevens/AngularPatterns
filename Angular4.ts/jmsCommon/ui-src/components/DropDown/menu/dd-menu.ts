import {Component} from '@angular/core';

const options = [
  {label: 'New', value: 'new'},
  {label: 'Edit', value: 'edit'},
  {label: 'seperator'},
  {label: 'Move up', value: 'moveUp'},
  {label: 'Move down', value: 'moveDown'},
  {label: 'seperator'},
  {label: 'Rename', value: 'rename'},
  {label: 'seperator'},
  {label: 'Remove', value: 'remove'}
];

@Component({
  selector: 'dd-menu',
  template: require('./dd-menu.html'),
  styles: [require('./dd-menu.css')]
})
export class DropDownMenu {
  options = options;
  optionsID = '';
  testID = 'testDropDownMenu';
  option = {label: 'Something', value: 'none'};

  clickHandler = (menuObject, optionsID) => {
    this.option = menuObject;
    this.optionsID = optionsID;
  };
}
