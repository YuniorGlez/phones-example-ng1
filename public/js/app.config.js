(function () {
    'use strict';

    angular.module('EOI', [
        'ngRoute'
    ]).config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: '/views/home.html'
            })
            .when('/phone/:id', {
                controller: 'PhoneController',
                templateUrl: '/views/phone.html'
            })

    }
})();