(function () {
  'use strict';

  angular
    .module('uapp.sideBar')
    .config(configSidebar);

  configSidebar.$inject = ['$stateProvider'];

  function configSidebar($stateProvider) {
    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'sidebar/sidebar.html',
        controller: 'SidebarCtrl',
        controllerAs: 'sidebar'
      });
  };
})();