(function() {
    'use strict';

    angular
        .module('EOI')
        .factory('PhonesFactory', PhonesFactory);

    PhonesFactory.$inject = ['$http'];
    function PhonesFactory($http) {
        var phonesUrl = 'http://localhost:3333/api/phones';
        var service = {
            getAll:getAll,
            get:get,
            getSlow:getSlow
        };
        
        return service;

        ////////////////
        function getAll() { 
            return $http.get(phonesUrl)
                .then(response => response.data)
        }

        function get(id){
            return $http.get(phonesUrl + '/' + id)
                .then(response => response.data)
        }

        function getSlow(id){
            return $http.get(phonesUrl + '/' + id + '?slow=true')
                .then(response => response.data)
        }

    }
})();