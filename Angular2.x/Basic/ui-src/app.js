'use strict';

import 'zone.js';
import 'reflect-metadata';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import './index.html';
import './css/index.css';
import './img/favicon.ico';

import {AppCtrl} from './components/app.ctrl';

const AppModule = NgModule({
  imports: [BrowserModule],
  declarations: [AppCtrl],
  bootstrap: [AppCtrl]
}).Class({
  constructor: function() {}
});

document.addEventListener('DOMContentLoaded', function() {
  platformBrowserDynamic().bootstrapModule(AppModule);
});
