import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'modal-popup',
  template: require('./modal-popup.html'),
  styles: [require('./modal-popup.css')]
})
export class ModalPopup {
  @Output() onClicked = new EventEmitter();
  closeBtn = {buttonid: 'close', text: 'Close', classes: 'Btn'};
  
  onClick = () => { this.onClicked.emit(); }
}
