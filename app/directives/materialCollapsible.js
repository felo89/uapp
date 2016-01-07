;(function(){
  'use strict'

  angular
    .module('uapp.directives')
    .directive('materialCollapsible', materialCollapsible);

  function materialCollapsible(){
    return {
      restrict: 'A',
      // scope: { },
      link: function(scope, element, attrs){
        // element.initPluginFunction(
        //   //variables de configuración
        // );

      }
    };
  }
})();