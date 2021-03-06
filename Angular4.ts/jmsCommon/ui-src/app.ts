'use strict';

import './css/index.css';
import './css/rangeInput.css';

import './img/favicon.ico';
import './img/sun.ico';
import './img/leaf.ico';
import './img/snow.ico';
import './img/flow.png';
import './img/1x1TransShim.gif';
import './img/SLogoS5-48_C.png';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgReduxModule, NgRedux} from '@angular-redux/store';
import {SharedModule} from './shared/shared.module';

import {PAGE_DECLARATIONS} from './components/page.declarations';
import {COMMON_DECLARATIONS} from './common/common.declarations';

import {AppComponent} from './components/app-component';

import {store} from './store/App.Store';

import {apiGetAppData, apiGetImageList, apiGetTreeView, apiGetInputData, apiGetPicList} from './store/api/api.Actions';

@NgModule({
  imports: [BrowserModule, NgReduxModule, SharedModule],
  declarations: [AppComponent, COMMON_DECLARATIONS, PAGE_DECLARATIONS],
  bootstrap: [AppComponent]
})
class AppModule {
  constructor(ngRedux) {
    this.ngRedux = ngRedux;
    this.ngRedux.provideStore(store);
  }
}
AppModule.parameters = [[NgRedux]];

// store.dispatch(apiGetAppData());
// store.dispatch(apiGetImageList());
// store.dispatch(apiGetTreeView());
// store.dispatch(apiGetInputData());
store.dispatch(apiGetPicList());

platformBrowserDynamic().bootstrapModule(AppModule);
