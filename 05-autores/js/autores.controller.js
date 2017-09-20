(function() {
    'use strict';

    angular
        .module('appMain')
        .controller('AutoresController', AutoresController);

    
    function AutoresController() {

        this.autores = [
            {autor:'Manolo',
            genero:'terror',
            pais:'España',
            fechaNacimiento:new Date(1980,5,5)},
            {autor:'Peter',
            genero:'novela histórica',
            pais:'Reino Unido',
            fechaNacimiento:new Date(1981,5,5)}
        ]; 
        this.orden = "";
        this.ordenes =[{id:"autor", nombre:"Autor"},
                        {id:"genero", nombre:"Género"},
                        {id:"pais", nombre:"País"},
                        {id:"fechaNacimiento", nombre:"Fecha de Nacimiento"}];
        this.genero= "";
        this.pais=false;
        this.date=false;
        
        
        
        
    }
})();