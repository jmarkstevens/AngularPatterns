import {Component} from '@angular/core';

const title = 'Hello progress-bar-page';

@Component({
  selector: 'progress-bar-page',
  template: require('./progress-bar-page.html'),
  styles: [require('./progress-bar-page.css')]
})
export class ProgressBarPage {
  constructor() {
    this.title = title;
  }
}
