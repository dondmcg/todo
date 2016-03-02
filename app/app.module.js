angular.module('todoapp',['ngRoute']);

angular.module('todoapp').run(function($rootScope, $location){

    $rootScope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});