(function(){
    "use strict";

    angular
        .module('todoapp')
        .factory('ListService', ListService);
    ListService.$inject = ["$http"];

    function ListService($http) {
        var listUrl = 'http://localhost:3000/items/';
        var service = {
            list: list,
            update: update,
            remove: remove,
            add: add
        }

        return service;

        function list(){
            return $http({
                method: 'get',
                url: listUrl
            });
        }

       function update(item) {
            return $http({
                method: 'put',
                url: listUrl + item.id,
                data: item
            });
        }

        function remove(id) {
            return $http({
                method: 'delete',
                url: listUrl + item.id
            });
        }

        function add(item) {
            return $http({
                method: 'POST',
                url: listUrl,
                data: item
            });
        }
    }

})();