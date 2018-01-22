angular.module('todoapp',['ngRoute','firebase']);

angular.module('todoapp')
    .run(function($rootScope, $location){

        $rootScope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });