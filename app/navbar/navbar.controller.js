(function(){
  'use strict'

  angular
    .module('uapp.menu')
    .controller('navbarCtrl', navbarCtrl);

  navbarCtrl.$inject = ['$ionicSideMenuDelegate'];

  function navbarCtrl($ionicSideMenuDelegate){
    var vm = this;
    vm.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
    }
  }
})();