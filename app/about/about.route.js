'use strict';

(function () {

    angular.module("about")
        .config(config);

    // dependecy injection
    config.$inject = ["$stateProvider","$urlRouterProvider"];

    function config($stateProvider,$urlRouterProvider) {

        $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'about/about.html',
            controller: 'aboutController',
            controllerAs: "c",
        });
    }

})();