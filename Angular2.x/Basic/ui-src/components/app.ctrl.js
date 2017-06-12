import {Component} from '@angular/core';

let ctrlTemplate = `
  <div class="hiDiv"><h1>{{title}}</h1></div>
  `;

const inLine = [".hiDiv {color: yellow; text-align: center;}"];

const appTitle = 'Hello Angular 2 World';

export const AppCtrl = Component({
  selector: 'app-ctrl',
  template: ctrlTemplate,
  styles: inLine
}).Class({
  constructor: function(title = appTitle) {
    this.title = title;
  }
});
