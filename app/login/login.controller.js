(function(){
  'use strict';

  angular
    .module('uapp.login')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$state'];

  function LoginCtrl($state){
    var vm = this;

    vm.login = function(){
      $state.go('app.dashboard');
    }
  };
})();