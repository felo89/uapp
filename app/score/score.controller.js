(function(){
  'use strict';

  angular
    .module('uapp.score')
    .controller('ScoreCtrl', ScoreCtrl);

  function ScoreCtrl(){
    var vm = this;
    vm.grades = [
      {name: 'Curso 1', code: 'cxd8524'},
      {name: 'Curso 2', code: 'cxd2154'},
      {name: 'Curso 3', code: 'cxd6874'},
      {name: 'Curso 4', code: 'cxd3153'}
    ];
  };
})();