(function () {
  'use strict';

  angular
    .module('uapp.login')
    .config(configLogin);

  configLogin.$inject = ['$stateProvider'];

  function configLogin($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        // views: {
        //   'page':{templateUrl: 'login/login.html', controller: 'LoginCtrl', controllerAs: 'login'}
        // }
        templateUrl: 'login/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      });
  };
})();