(function(){
  'use strict';

  angular
    .module('uapp.score')
    .controller('GradeCtrl', GradeCtrl);

  GradeCtrl.$inject = ['$state'];

  function GradeCtrl($state){
    console.log("llega");
    var vm = this;
    vm.name = "curso 1";
  };
})();