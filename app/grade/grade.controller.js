(function(){
  'use strict';

  angular
    .module('uapp.grade')
    .controller('GradeCtrl', GradeCtrl);

  GradeCtrl.$inject = ['$state','gradeResponse'];

  function GradeCtrl($state,gradeResponse){
    console.log("llega",gradeResponse);
    var vm = this;
    vm.name = gradeResponse.name;
    vm.code = gradeResponse.code;
    vm.profesorName = gradeResponse.profesorName;
  };
})();