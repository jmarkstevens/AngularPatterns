import {Component, ChangeDetectorRef} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

import {editRecord} from '../../store/input/input.Actions';
import {inputs} from './input.data';

@Component({
  selector: 'input-page',
  template: require('./input-page.html'),
  styles: [require('./input-page.css')]
})
export class InputPage {
  textInput1 = inputs.textInput1;
  textInput2 = inputs.textInput2;
  checkInput1 = inputs.checkInput1;
  colorInput = inputs.colorInput;
  fileInput = inputs.fileInput;
  numberInput = inputs.numberInput;
  rangeInput = inputs.rangeInput;
  radioInput1 = inputs.radioInput1;
  radioInput2 = inputs.radioInput2;
  radioInput3 = inputs.radioInput3;
  radioValue = '';

  constructor(changeDetectorRef, ngRedux) {
    this.changeDetectorRef = changeDetectorRef;
    this.ngRedux = ngRedux;
    this.unsubscribe = this.ngRedux.subscribe(this.subscribeToState);
    this.subscribeToState(1);
    this.textInput1.style = inputs.customStyle;
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  onValueChanged = (newValue, inputObject) => {
    this.saveChanges(inputObject.name, newValue);
  };

  saveChanges = (name, value) => {
    this.ngRedux.dispatch(editRecord(name, value));
  }

  subscribeToState = first => {
    this.inputState = this.ngRedux.getState().inputState;
    let isCurrentPage = this.ngRedux.getState().appState.currentPage === 'InputPage';
    if (!first && isCurrentPage) {
      this.changeDetectorRef.detectChanges();
      this.setData();
    }
  }

  setData = () => {
    this.textInput1.value = this.inputState.text;
    if (!this.textInput1.initValue) {
      this.textInput1.initValue = this.inputState.text;
    }
    this.textInput2.value = this.inputState.textFocus;
    if (!this.textInput2.initValue) {
      this.textInput2.initValue = this.inputState.textFocus;
    }
    this.checkInput1.value = this.inputState.checkbox;
    if (typeof this.checkInput1.initValue === 'undefined') {
      this.checkInput1.initValue = this.inputState.checkbox;
    }
    this.colorInput.value = this.inputState.color;
    if (!this.colorInput.initValue) {
      this.colorInput.initValue = this.inputState.color;
    }
    this.fileInput.value = this.inputState.folder;
    if (!this.fileInput.initValue) {
      this.fileInput.initValue = this.inputState.folder;
    }
    this.numberInput.value = this.inputState.number;
    if (!this.numberInput.initValue) {
      this.numberInput.initValue = this.inputState.number;
    }
    this.rangeInput.value = this.inputState.range;
    if (!this.rangeInput.initValue) {
      this.rangeInput.initValue = this.inputState.range;
    }
    this.setRadioValues();
  }
  setRadioValues = () => {
    let groupValue = this.inputState.radioGroup;
    this.radioInput1.value = (groupValue === this.radioInput1.radioValue);
    this.radioInput2.value = (groupValue === this.radioInput2.radioValue);
    this.radioInput3.value = (groupValue === this.radioInput3.radioValue);
    this.radioValue = groupValue;
  }
}

InputPage.parameters = [[ChangeDetectorRef], [NgRedux]
];
