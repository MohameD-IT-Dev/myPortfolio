'use strict';

(function () {

    angular.module("contact")
        .config(config);

    // dependecy injection
    config.$inject = ["$stateProvider","$urlRouterProvider"];

    function config($stateProvider,$urlRouterProvider) {

        $stateProvider
        .state('contact', {
            url: '/contact',
            templateUrl: 'contact/contact.html',
            controller: 'contactController',
            controllerAs: "c",
        });
    }

})();