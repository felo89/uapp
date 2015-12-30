(function () {
  'use strict';

  angular
    .module('uapp.score')
    .config(configScore);

  configScore.$inject = ['$stateProvider'];

  function configScore($stateProvider){
    $stateProvider
      .state('app.score', {
        url: '/score',
        views: {
          'page':{templateUrl: 'score/score.html', controller: 'ScoreCtrl', controllerAs: 'score'}
        }
      })
      .state('app.score.grade', {
        url: '/grade',
        views: {
          'page':{templateUrl: 'score/score.grade.html', controller: 'GradeCtrl', controllerAs: 'grade'}
        }
      });
  };
})();