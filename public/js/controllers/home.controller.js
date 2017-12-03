(function () {
    'use strict';

    angular
        .module('EOI')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'PhonesFactory'];

    function HomeController($scope, PhonesFactory) {
        $scope.phones = []
        $scope.callToGet = callToGet;


        activate();

        ////////////////

        function activate() {
            loadPhones();
        }


        function callToGet(id) {
            PhonesFactory.get(id)
                .then(phone => console.log(phone))
                .catch(e => console.error('There was some error in callToGet, ', e))
        }

        function loadPhones() {
            PhonesFactory.getAll()
                .then(phones => $scope.phones = phones)
                .catch(e => console.error('There was some error in loadPhones, ', e))
        }
    }
})();