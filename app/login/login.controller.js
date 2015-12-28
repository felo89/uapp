(function(){
'use strict';

  angular
    .module('uapp.login')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl(){
    var vm = this;
    vm.title = "Login";
  };
})();