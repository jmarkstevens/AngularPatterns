'use strict';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgReduxModule, NgRedux} from '@angular-redux/store';

import './css/index.css';
import './img/favicon.ico';

import {AppComponent} from './components/app.component';
import {APP_DECLARATIONS} from './components/app.declarations';
import {store} from './store/App.Store';

const AppModule = NgModule({
  imports: [BrowserModule, NgReduxModule],
  declarations: [AppComponent, APP_DECLARATIONS],
  bootstrap: [AppComponent]
}).Class({
  constructor(ngRedux) {
    this.ngRedux = ngRedux;
    this.ngRedux.provideStore(store);
  }
});
AppModule.parameters = [[NgRedux]];

document.addEventListener('DOMContentLoaded', function() {
  platformBrowserDynamic().bootstrapModule(AppModule);
});
