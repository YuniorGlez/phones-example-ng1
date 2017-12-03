(function () {
    'use strict';

    angular
        .module('EOI')
        .controller('PhoneController', PhoneController);

    PhoneController.$inject = ['Phone'];

    function PhoneController(Phone) {
        var vm = this;
        vm.phone = {};

        activate();

        ////////////////

        function activate() {
            vm.phone = Phone;
        }

    }
})();