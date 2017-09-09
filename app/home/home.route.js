'use strict';

(function () {

    angular.module("home")
        .config(config);

    // dependecy injection
    config.$inject = ["$stateProvider","$urlRouterProvider"];

    function config($stateProvider,$urlRouterProvider) {

        $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: 'homeController',
            controllerAs: "c",
        });
    }

})();