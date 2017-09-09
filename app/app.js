'use strict';

// Declare app level module which depends on views, and components


(function () {
    'use strict';

    var app =  angular.module('mioSito', [   
                 "ui.router",
                 "ngMaterial",
                 "ngAria",
                 "ngAnimate",
                 'home',
                 'about',
                 'contact',
                 /*
                  * components
                  */
                 'components.nav',
                 'templates'
    ]).config(configure);
    
    configure.$inject = ['$urlRouterProvider', '$mdThemingProvider'];
    
    function configure($urlRouterProvider, $mdThemingProvider) {
        /* landing page */
    	$urlRouterProvider.otherwise("/home");
    	$mdThemingProvider.setDefaultTheme('none');
  }

})();
