(function(){
  'use strict';

  angular
    .module('uapp.score')
    .controller('ScoreCtrl', ScoreCtrl);

  ScoreCtrl.$inject = ['$state'];
  
  function ScoreCtrl($state){
    var vm = this;
    vm.grades = [
      {name: 'Curso 1', code: 'cxd8524'},
      {name: 'Curso 2', code: 'cxd2154'},
      {name: 'Curso 3', code: 'cxd6874'},
      {name: 'Curso 4', code: 'cxd3153'}
    ];

    vm.goGradeDetail = function(codeGrade){
      $state.go('app.grade', {codeGrade: codeGrade});
    };
  };
})();