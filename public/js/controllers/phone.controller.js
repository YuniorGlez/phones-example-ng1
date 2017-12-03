(function() {
    'use strict';

    angular
        .module('EOI')
        .controller('PhoneController', PhoneController);

    PhoneController.$inject = ['$scope', '$routeParams', 'PhonesFactory'];
    function PhoneController($scope,$routeParams,  PhonesFactory) {
        $scope.phone = {};

        activate();

        ////////////////

        function activate() { 
            loadPhone($routeParams.id);   
        }

        function loadPhone(id){

            PhonesFactory.get(id)
                .then(phone => $scope.phone = phone)
                .catch(e => {
                    console.error('There was some error in loadPhone, ', e);
                })
        }
    }
})();