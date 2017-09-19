(function() {
    'use strict';

    angular
        .module('appMain')
        .controller('CompraController', CompraController);

    
    function CompraController() {

        this.aComprar = []; 
        this.elemento = "";
        
        
        this.add = function() {
            this.aComprar.push(this.elemento);
            this.elemento="";
        };
        
    }
})();