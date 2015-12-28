(function(){
'use strict';

  angular
    .module('uapp.login')
    .controller('LoginCtrl', LoginCtrl);

  function LoginCtrl(){
    console.log('login',this);
    var vm = this;
    vm.title = "Login";
  };
})();