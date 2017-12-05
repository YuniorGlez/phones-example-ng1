(function() {
    'use strict';

    angular.module('PhonesApp', ['ngRoute'])


    .config(config);


    config.$inject = ['$routeProvider'];
    function config($routeProvider){
        $routeProvider
            .when('/' , {
                controller : 'HomeController',
                templateUrl : '/views/home.html'
            })
            .when('/phone/:id' , {
                controller : 'PhoneController',
                templateUrl : '/views/phone.html',
                resolve : {
                    Phone : promesa
                }
            })
    }

    promesa.$inject = ['Phones' , '$route'];
    function promesa (Phones , $route){
        var idPhone = $route.current.params.id; 
        return Phones.getSlow(idPhone)

    }




})();