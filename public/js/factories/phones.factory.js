(function () {
    'use strict';

    angular
        .module('PhonesApp')
        .factory('Phones', Phones);

    Phones.$inject = ['$http'];

    function Phones($http) {
        var service = {
            getAll: getAll,
            get: get,
            getSlow: getSlow

        };

        return service;

        ////////////////
        
        function getAll() {
            return $http.get('http://localhost:3333/api/phones')
                .then(informacionCorrecta)
                .catch(informacionInCorrecta)
        }
        
        function get(id) {
            return $http.get('http://localhost:3333/api/phones/' + id)
                .then(informacionCorrecta)
                .catch(informacionInCorrecta)
        }

        function getSlow(id) {
            return $http.get('http://localhost:3333/api/phones/' + id + '?slow=true')
                .then(informacionCorrecta)
                .catch(informacionInCorrecta)
        }



        function informacionCorrecta(response) {
            console.log('Soy la factoría y recogí esto de la api ', response.data);
            return response.data;
        }

        function informacionInCorrecta(error) {
            console.error('Hubo un error super chungo chungisimo al preguntar por los phones ', error);
            return [];
        }


    }
})();