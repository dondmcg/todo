angular.module('todoapp')
    .config(['$routeProvider',function ($routeProvider) {
        "use strict";

        $routeProvider

            .when('/list',{
                templateUrl: 'list/list.html',
                controller: 'ListController',
                controllerAs: "listCtrl"
            })

            .otherwise({
                redirectTo:'list'
            });
    }])