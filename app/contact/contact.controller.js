'use strict';

(function(){

    angular.module('contact')
           .controller('contactController', contactViewCtrl);

    contactViewCtrl.$inject = ['$log','$scope'];

    function contactViewCtrl($log,$scope){

        var self = this;
        
        init();

        function init(){
        	$log.info("*** contact view Controller Init ***");
        }

    }

})();