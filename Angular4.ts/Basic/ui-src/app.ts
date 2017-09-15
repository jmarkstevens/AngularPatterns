'use strict';

import 'zone.js';
import 'reflect-metadata';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import './index.html';
import './css/index.css';
import './img/favicon.ico';

import {AppComponent} from './components/app.component';

const AppModule = NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
}).Class({
  constructor: function() {}
});

document.addEventListener('DOMContentLoaded', function() {
  platformBrowserDynamic().bootstrapModule(AppModule);
});
