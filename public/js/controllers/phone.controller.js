(function () {
    'use strict';

    angular
        .module('PhonesApp')
        .controller('PhoneController', PhoneController);

    PhoneController.$inject = ['$scope',  'Phone'];

    function PhoneController($scope, Phone) {
        var vm = this;
        $scope.phone = {};


        activate();

        ////////////////

        function activate() {

            $scope.phone = Phone; 


            // var idPhone = $routeParams.id;

            // Phones.getSlow(idPhone).then(phone => $scope.phone = phone);


        }
    }
})();