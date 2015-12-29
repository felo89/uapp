(function () {

'use strict';
  //MODULES DEPENDENCIES;
  angular.module('uapp.sideBar',[]);
  angular.module('uapp.login',[]);
  angular.module('uapp.dashboard',[]);
  angular.module('uapp.score',[]);

  angular
    .module('uapp', ['ionic','ui.router','uapp.sideBar','uapp.login','uapp.dashboard','uapp.score'])
    // .run(run)
    .config(config);

  config.$inject = ['$urlRouterProvider'];

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
  };

  // run.$inject = ['$rootScope']

  // function run($rootScope){
  //   $rootScope.$on('$stateChangeStart',function(e, toState, toParams, fromState, fromParams){
  //     $rootScope.showUserModules = false;
  //   });
  // }
})();