(function () {
    'use strict';

    angular
        .module('EOI')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        $scope.title = 'Welcome to the Home Page';

        activate();

        ////////////////

        function activate() {
            console.log('Hi from the HomeController activate function');
        }
    }
})();