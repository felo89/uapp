(function(){
  'use strict';

  angular
    .module('uapp.assistance')
    .controller('AssistanceCtrl', AssistanceCtrl);

  function AssistanceCtrl(){
    var vm = this;
    vm.detail = [
      {grade: 'Calculo III', assistance: '92%'},
      {grade: 'Programación II', assistance: '94%'},
      {grade: 'Sistemas de Información', assistance: '87%'},
      {grade: 'Base de Datos I', assistance: '60%'}
    ]
  };
})();