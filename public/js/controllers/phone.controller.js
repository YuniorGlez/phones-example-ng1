(function () {
    'use strict';

    angular
        .module('EOI')
        .controller('PhoneController', PhoneController);

    PhoneController.$inject = ['$routeParams'];

    function PhoneController($routeParams) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            vm.id = $routeParams.id;
        }

    }
})();