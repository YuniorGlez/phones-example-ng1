(function () {
    'use strict';

    angular
        .module('EOI')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'PhonesFactory'];

    function HomeController($scope, PhonesFactory) {
        $scope.phones = []

        activate();

        ////////////////

        function activate() {
            loadPhones();
        }


        function loadPhones() {

            PhonesFactory.getAll()
                .then(phones => {
                    $scope.phones = phones;
                })
                .catch(e => {
                    console.error('There was some error in loadPhones, ', e);
                })
        }
    }
})();