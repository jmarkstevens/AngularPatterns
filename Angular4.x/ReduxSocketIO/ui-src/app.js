'use strict';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgReduxModule, NgRedux} from '@angular-redux/store';

import './css/index.css';
import './img/favicon.ico';

import {apiSetData1, apiSetData2} from './store/api.Actions';

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

const newData1 = {
  name: 'Hello Parent after SocketIO set and get',
  setDateTime: new Date().toLocaleString()
};

store.dispatch(apiSetData1(newData1));

const newData2 = {
  name: 'Hello Child after SocketIO set and get',
  setDateTime: new Date().toLocaleString()
};

store.dispatch(apiSetData2(newData2));

document.addEventListener('DOMContentLoaded', function() {
  platformBrowserDynamic().bootstrapModule(AppModule);
});
