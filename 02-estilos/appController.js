angular.module("appMain")
.controller("AppController", AppController)

function AppController() {
    this.user ={
        name:'Juan',
        apellido:'Perez'
    }; 
    this.curso='AngularJS';
    
    
    this.borrar = function() {
        this.user.name ='';
        console.dir(this);
    };
}
