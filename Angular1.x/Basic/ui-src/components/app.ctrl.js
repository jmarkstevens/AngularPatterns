import angular from 'angular';

const inlineStyle = {color: 'yellow', 'text-align': 'center'};

let titleTemplate = `
  <div ng-style="$ctrl.instyle">
    <h1>Hello {{ $ctrl.title.name }}</h1>
  </div>
  `;

const appTitle = {
  bindings: {title: '=', instyle: '='},
  template: titleTemplate
};

function AppCtrlController() {
  let ctrl = this;
  ctrl.title = {name: 'World'};
  ctrl.style = inlineStyle;
}

let ctrlTemplate = `
  <app-title style="width:100%;" title="$ctrl.title" instyle="$ctrl.style"></app-title>
  `;

const appCtrl = {
  controller: AppCtrlController,
  template: ctrlTemplate
};

angular.module('AppCtrl', []).component('appCtrl', appCtrl).component('appTitle', appTitle);
