(function(){
    "use strict";

    angular
        .module('todoapp')
        .factory('ListService', ListService);

    ListService.$inject = ['$firebaseArray'];

    function ListService($firebaseArray) {
        var ref = new Firebase('https://flickering-fire-936.firebaseio.com/items/'),
        list = $firebaseArray(ref);

        return list;


    }

})();