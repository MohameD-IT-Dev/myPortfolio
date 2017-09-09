'use strict';

(function(){

    angular.module('about')
           .controller('aboutController', aboutViewCtrl);

    aboutViewCtrl.$inject = ['$log','$scope'];

    function aboutViewCtrl($log,$scope){

        var self = this;
        
        init();

        function init(){
        	$log.info("*** about view Controller Init ***");
        }

    }

})();