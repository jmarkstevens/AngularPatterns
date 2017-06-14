'use strict';

import 'zone.js';
import 'reflect-metadata';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgReduxModule, NgRedux} from '@angular-redux/store';

import './index.html';
import './css/index.css';
import './img/favicon.ico';

import {AppCtrl} from './components/app.ctrl';
import {AppChild} from './components/app.child';
import {store} from './store/App.Store';

const AppModule = NgModule({
  imports: [BrowserModule, NgReduxModule],
  declarations: [AppCtrl, AppChild],
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
