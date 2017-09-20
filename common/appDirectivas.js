(function() {
    'use strict';

    angular
        .module('commonModule')
        .directive('appPie', appPie);

    function appPie() {
  
        var directive = {
            template: `<footer><p>{{autor}}</p></footer>`,
            restrict: 'E',
            scope: {
                autor : '@autor'
            }
        };
        return directive;
        
       
    }
    
})();