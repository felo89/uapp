(function () {

'use strict';
  //MODULES DEPENDENCIES;
  angular.module('uapp.sideBar',[]);
  angular.module('uapp.login',[]);
  angular.module('uapp.dashboard',[]);
  angular.module('uapp.score',[]);

  angular
    .module('uapp', ['ionic','ui.router','uapp.sideBar','uapp.login','uapp.dashboard','uapp.score'])
    .config(config);

  config.$inject = ['$urlRouterProvider'];

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
  };
})();