(function () {
    'use strict';

    angular
        .module('PhonesApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Phones'];

    function HomeController($scope, Phones) {
        $scope.phones = [];
        // $scope.escupeloEnLaConsola = escupeloEnLaConsola;

        activate();

        ////////////////

        function activate() {
            loadPhones();
        }

        function loadPhones() {
            Phones.getAll()
                .then(phones => $scope.phones = phones);
        }

        // function escupeloEnLaConsola(id) {
        //     Phones.get(id);
        // }


    }
})();