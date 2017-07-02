import {Component} from '@angular/core';

const growthspeed = {
  "value": [],
  "key": "GrowthFilter",
  "title": "Growth speed",
  "helpTitle": "Growth rate",
  "options": [
    {
      "count": 1,
      "label": "Extremely slow",
      "value": "slow3"
    },
    {
      "count": 20,
      "label": "Very slow",
      "value": "slow2"
    },
    {
      "count": 46,
      "label": "Slow",
      "value": "slow1"
    },
    {
      "count": 46,
      "label": "Moderate",
      "value": "mod"
    },
    {
      "count": 24,
      "label": "Fast",
      "value": "fast1"
    },
    {
      "count": 5,
      "label": "Very fast",
      "value": "fast2"
    },
    {
      "count": 3,
      "label": "Extremely fast",
      "value": "fast3"
    }
  ]
};

@Component({
  selector: 'dd-multi',
  template: require('./dd-multi.html'),
  styles: [require('./dd-multi.css')]
})
export class DropDownMulti {
  options = growthspeed.options;
  optionsID = '';
  testID = 'testDropDownMulti';
  selectedValues = [];

  clickHandler = (selectedItems, optionsID) => {
    let newValue = [];
    selectedItems.forEach(item => newValue.push(item.value));
    this.selectedValues = newValue.slice();
    this.optionsID = optionsID;
  };
}
