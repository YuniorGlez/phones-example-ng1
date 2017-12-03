(function () {
    'use strict';

    angular
        .module('EOI')
        .controller('PhoneController', PhoneController);

    PhoneController.$inject = ['$scope', '$routeParams', 'Phone'];

    function PhoneController($scope, $routeParams, Phone) {
        $scope.phone = {};

        activate();

        ////////////////

        function activate() {
            $scope.phone = Phone;
        }

    }
})();