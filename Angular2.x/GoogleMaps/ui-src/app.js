'use strict';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgReduxModule, NgRedux} from '@angular-redux/store';

import './index.html';
import './css/index.css';
import './img/favicon.ico';

import {AppCtrl} from './components/app.ctrl';
import {MapPage} from './components/map/map.page';
import {NavBar} from './components/common/nav.bar';
import {store} from './store/App.Store';

const AppModule = NgModule({
  imports: [BrowserModule, NgReduxModule],
  declarations: [AppCtrl, MapPage, NavBar],
  bootstrap: [AppCtrl]
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
