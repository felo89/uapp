(function () {
  'use strict';

  angular
    .module('uapp.grade')
    .config(configScore);

  configScore.$inject = ['$stateProvider'];

  function configScore($stateProvider){
    $stateProvider
      .state('app.grade', {
        url: '/grade/:codeGrade',
        views: {
          'page':{templateUrl: 'grade/grade.html', controller: 'GradeCtrl', controllerAs: 'grade'}
        },
        resolve:{
          gradeResponse:['$stateParams', function($stateParams){
            console.log($stateParams.codeGrade);
            return {name: 'Curso1', code:'cxd8524', profesorName: 'Jhon Doe'};
          }]
        }
      });
  };
})();