(function () {

'use strict';
  //MODULES DEPENDENCIES;
  angular.module('uapp.dashboard',[]);
  angular.module('uapp.login',[]);

  angular
    .module('uapp', ['ionic','ui.router','uapp.dashboard','uapp.login'])
    .config(config);

  config.$inject = ['$urlRouterProvider'];

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
  };
})();