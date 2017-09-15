import {Component} from '@angular/core';

const options = [
  {label: 'Any', value: 'Any'},
  {label: 'Extremely slow', value: 'slow3'},
  {label: 'Very slow', value: 'slow2'},
  {label: 'Slow', value: 'slow1'},
  {label: 'Moderate', value: 'mod'},
  {label: 'Fast', value: 'fast1'},
  {label: 'Very fast', value: 'fast2'},
  {label: 'Extremely fast', value: 'fast3'}
];

@Component({
  selector: 'dd-select',
  template: require('./dd-select.html'),
  styles: [require('./dd-select.css')]
})
export class DropDownSelect {
  options = options;
  optionsID = '';
  testID = 'testDropDownSelect';
  option = {label: 'Something', value: 'none'};

  clickHandler = (selectObject, optionsID) => {
    this.option = selectObject;
    this.optionsID = optionsID;
  };
}
