import angular from 'angular';

import {apiSetData} from '../store/api.Actions';

const inlineStyle = {color: 'orange', 'text-align': 'center'};


let titleTemplate = `
  <div ng-style="$ctrl.instyle">
    <h1>{{ $ctrl.title.name }}</h1>
  </div>
`;

const appTitle = {
  bindings: {title: '=', instyle: '='},
  template: titleTemplate
};

const newData = {
    name: 'Hello Fetched World',
    setDateTime: new Date().toLocaleString()
};

class AppCtrlController {
  constructor($ngRedux) {
    this.style = inlineStyle;
    this.unsubscribe = $ngRedux.connect(this.mapStateToThis, this.mapDispatch)(this);
  }

  $onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis = state => {
    return {
      title: state.data1
    };
  };

  mapDispatch = dispatch => {
    dispatch(apiSetData(newData));
    return null;
  };
}

AppCtrlController.$inject = ['$ngRedux'];

let ctrlTemplate = `
  <app-title style="width:100%;" title="$ctrl.title" instyle="$ctrl.style"></app-title>
`;

const appCtrl = {
  controller: AppCtrlController,
  template: ctrlTemplate
};

angular.module('AppCtrl', []).component('appCtrl', appCtrl).component('appTitle', appTitle);
