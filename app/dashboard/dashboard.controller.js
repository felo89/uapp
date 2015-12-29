(function(){
  'use strict';

  angular
    .module('uapp.dashboard')
    .controller('DashboardCtrl', DashboardCtrl);

  function DashboardCtrl(){
    var vm = this;
    vm.title = "Dashboard";
  };
})();