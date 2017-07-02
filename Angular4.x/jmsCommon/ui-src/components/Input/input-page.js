import {Component} from '@angular/core';

const title = 'Hello input-page';

@Component({
  selector: 'input-page',
  templateUrl: './input-page.html',
  styleUrls: ['./input-page.css']
})
export class InputPage {
  constructor() {
    this.title = title;
  }
}
