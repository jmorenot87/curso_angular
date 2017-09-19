class AppController {
    
    constructor($scope){
        this.scope = $scope;
    }
    
    $onInit(){
        this.user ={
            name:'Juan',
            apellido:'Perez'
        }; 
        this.curso='AngularJS';
    }

    borrar() {
        this.user.name ='';
        console.dir(this);
    };
}

angular.module("appMain")
.controller("AppController", AppController)


