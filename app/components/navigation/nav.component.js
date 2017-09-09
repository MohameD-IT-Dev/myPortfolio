'use strict';

(function(){
    angular.module('components.nav')
        .component('cmpNav',{
            restrict: 'E',
            templateUrl: 'components/navigation/nav.html',
            controller: navController,
            controllerAs: 'c'
        });


    navController.$inject = ['$log', 
                             '$scope',
                             '$state'];

    function navController($log, $scope, $state){
    	
        var self = this;
        
        self.selectedNav = 'home';
        self.languages = ['English', 'Italiano', 'Français'];
        
        init();
        
        function init(){
        	self.selectedLang = self.languages[0];
        	$scope.$watch(function(){
        	    return $state.$current.name
        	}, function(newVal, oldVal){
        	    if (newVal !== '') {
        	    	self.selectedNav = newVal;
				}
        	});
        }

    }


})();