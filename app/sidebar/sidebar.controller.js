(function(){
  'use strict'

  angular
    .module('uapp.sideBar')
    .controller('SidebarCtrl', SidebarCtrl);

  SidebarCtrl.$inject = ['$state','$ionicSideMenuDelegate'];

  function SidebarCtrl($state,$ionicSideMenuDelegate){
    var vm = this;
    vm.menus = [
      {name: 'Inicio', icon: 'ion-home', state: 'dashboard'},
      {name: 'Notas', icon: 'ion-compose', state: 'score'},
      {name: 'Asistencia', icon: 'ion-person-add', state: 'assistance'},
      {name: 'Horario', icon: 'ion-calendar', state: 'schedule'},
      {name: 'Redes Sociales', icon: 'ion-person-stalker', state: 'socialMedia'},
      {name: 'Email', icon: 'ion-email', state: 'mail'},
      {name: 'Ajustes', icon: 'ion-gear-b', state: 'settings'},
      {name: 'Cerrar Sesión', icon: 'ion-power', state: 'closeSession'}
    ];

    vm.showOption = function(state){
      $ionicSideMenuDelegate.toggleLeft();
      $state.go('app.'+state);
    }
  }
})();