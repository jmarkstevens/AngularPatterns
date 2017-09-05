import {Component} from '@angular/core';

@Component({
  selector: 'modal-page',
  template: require('./modal-page.html'),
  styles: [require('./modal-page.css')]
})
export class ModalPage {
  showPopupModal = false;
  openBtn = {buttonid: 'open', text: 'Open', classes: 'Btn'};
  
  onClicked = () => { this.showPopupModal = !this.showPopupModal; }
}
