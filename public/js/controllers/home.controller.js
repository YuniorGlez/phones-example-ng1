(function () {
    'use strict';

    angular
        .module('EOI')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        $scope.phones= [ {name : 'Fake 1', price : '100€'}, {name : 'Fake 2', price : '150€'}]

        activate();

        ////////////////

        function activate() {
            console.log('Hi from the HomeController activate function');
        }
    }
})();