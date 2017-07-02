import {Component} from '@angular/core';

const customSty = {
  'background-color': '#4d2c3d',
  'border-bottom-color': '#cea',
  'border-left-color': '#93a363',
  'border-right-color': '#cea',
  'border-top-color': '#93a363',
  'border-radius': '6px',
  color: '#fff',
  cursor: 'pointer',
  'font-size': '0.9rem',
  'line-height': '100%',
  margin: '0 3px',
  outline: 'none',
  'white-space': 'nowrap'
};

const assignSty = {'min-width': '1px', color: '#4d2c3d'};

const basicBtn = {buttonid: 'basic', text: 'Basic', classes: 'Btn'};
const basicBtn18 = {buttonid: 'basic18', text: 'Basic18', classes: 'Btn Btn18'};
const basicBtn24 = {buttonid: 'basic24', text: 'Basic24', classes: 'Btn Btn24'};
const basicBtn30 = {buttonid: 'basic30', text: 'Basic30', classes: 'Btn Btn30'};
const basicBtn40 = {buttonid: 'basic40', text: 'Basic40', classes: 'Btn Btn40'};

const basicBtnAssign = {buttonid: 'basicAssign', text: 'Assign', classes: 'Btn', style: assignSty};
const basicBtnCst = {buttonid: 'basicCustom', text: 'Custom', classes: 'Btn', style: customSty};

const basicBackImgBtn = {
  buttonid: 'basicBackImg',
  classes: 'Icon',
  style: {
    background: "url('./img/sun.ico') 0/30px",
    height: '30px',
    width: '30px'
  }
};
const basicBackImg2Btn = {
  buttonid: 'basicBackImg2',
  classes: 'Icon',
  style: {
    background: "url('./img/SLogoS5-48_C.png') 0/40px",
    height: '40px',
    width: '40px'
  }
};

const basicIcon1Btn = {
  buttonid: 'basicIcon1',
  classes: 'Icon',
  icon: 'fa fa-arrow-circle-o-up fa-1x',
  style: {color: 'white', height: '50px'}
};
const basicIcon2Btn = {
  buttonid: 'basicIcon2',
  classes: 'Icon',
  icon: 'fa fa-arrow-circle-o-up fa-2x',
  style: {color: 'white'}
};
const basicIcon3Btn = {
  buttonid: 'basicIcon3',
  classes: 'Icon',
  icon: 'fa fa-arrow-circle-o-up fa-3x',
  style: {color: 'white'}
};

@Component({
  selector: 'button-page',
  template: require('./button-page.html'),
  styles: [require('./button-page.css')]
})
export class ButtonPage {
  constructor() {
    this.basicBtn = basicBtn;
    this.basicBtn18 = basicBtn18;
    this.basicBtn24 = basicBtn24;
    this.basicBtn30 = basicBtn30;
    this.basicBtn40 = basicBtn40;
    this.basicBtnAssign = basicBtnAssign;
    this.basicBtnCst = basicBtnCst;
    this.basicBackImgBtn = basicBackImgBtn;
    this.basicBackImg2Btn = basicBackImg2Btn;
    this.basicIcon1Btn = basicIcon1Btn;
    this.basicIcon2Btn = basicIcon2Btn;
    this.basicIcon3Btn = basicIcon3Btn;
    this.clicked = 'not clicked';
  }

  clickHandler = btnObject => {
    this.clicked = 'clickHandler buttonid: ' + btnObject.buttonid;
  };
}
