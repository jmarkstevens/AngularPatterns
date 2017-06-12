'use strict';

import angular from 'angular';
import ngRedux from 'ng-redux';

import './index.html';
import './css/index.css';
import './img/favicon.ico';

import './components/app.ctrl';
import {mainReducer, middleware} from './store/App.Store';

angular.module('basicReduxApp', ['AppCtrl', ngRedux]).config($ngReduxProvider => {
  $ngReduxProvider.createStoreWith(mainReducer, middleware);
});
