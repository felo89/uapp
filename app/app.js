(function () {

'use strict';
  //MODULES DEPENDENCIES;
  angular.module('uapp.menu',[]);
  angular.module('uapp.dashboard',[]);
  angular.module('uapp.login',[]);

  angular
    .module('uapp.menu')
    .constant('navbarConfig',{
      templateUrl: 'navbar/navbar.html',
      controller: 'navbarCtrl',
      controllerAs: 'navbar'
    });

  angular
    .module('uapp', ['ionic','ui.router','uapp.menu','uapp.dashboard','uapp.login'])
    .config(config);

  config.$inject = ['$urlRouterProvider'];

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
  };
})();