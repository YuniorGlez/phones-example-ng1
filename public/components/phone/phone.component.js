(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('EOI')
        .component('phone', {
            templateUrl: '/components/phone/phone.html',
            controller: PhoneCtrl,
            controllerAs: 'model',
            bindings: {
                id: '<',
            },
        });

    PhoneCtrl.$inject = ['PhonesFactory'];
    function PhoneCtrl(PhonesFactory) {
        var model = this;

        ////////////////

        model.$onInit = function() { 
            console.log('He de buscar el phone con id = ' , model.id)
            PhonesFactory.get(model.id)
                .then(phone => model.phone = phone);
        };



        model.$onChanges = function(changesObj) { };
        model.$onDestroy = function() { };
    }
})();