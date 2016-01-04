(function () {
  'use strict';

  angular
    .module('uapp.assistance')
    .config(configAssistance);

  configAssistance.$inject = ['$stateProvider'];

  function configAssistance($stateProvider) {
    $stateProvider
      .state('app.assistance', {
        url: '/assistance',
        views: {
          'page':{templateUrl: 'assistance/assistance.html', controller: 'AssistanceCtrl', controllerAs: 'assistance'}
        }
      });
  };
})();