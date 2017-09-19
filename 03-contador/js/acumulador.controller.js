(function() {
    'use strict';

    angular
        .module('appMain')
        .controller('AcumuladorController', AcumuladorController);

    
    function AcumuladorController() {

        this.incremento =1; 
        this.acumulado= 0;
        
        
        this.aumentar = function() {
            this.acumulado = eval(this.acumulado + this.incremento);
        };
        this.disminuir = function() {
            this.acumulado = eval(this.acumulado - this.incremento);
        };
    }
})();