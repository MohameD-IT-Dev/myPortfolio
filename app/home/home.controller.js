'use strict';

(function(){

    angular.module('home')
           .controller('homeController', homeViewCtrl);

    homeViewCtrl.$inject = ['$log','$scope','$interval'];

    function homeViewCtrl($log,$scope,$interval){

        var self = this;
        
        var promise = $interval(function() { 
    			var textHi = $('#textHi');
    			var textName = $('#textName');
    			var textDev = $('#textDev');
    			var animationLine = [textHi, textDev, textName];
    			var currentAnim = '';
    			angular.forEach(animationLine, function(value, key) {
    	        	  if (value.hasClass('animated')) {
    	        		  currentAnim = value[0].id;
    	        	  }
    			});
    			switch(currentAnim) {
    		    case 'textName':
    		    	if (textName.hasClass('animated bounce')) {
    		    		textName.removeClass('animated bounce');
    		    		textDev.addClass('animated rubberBand');
    				}
        			else {
        				textName.addClass('animated bounce');
    				}
    		        break;
    		    case 'textDev':
    		    	if (textDev.hasClass('animated rubberBand')) {
    		    		textDev.removeClass('animated rubberBand');
    		    		textHi.addClass('animated bounce');
    				}
        			else {
        				textDev.addClass('animated rubberBand');
    				}
    		        break;
    		    default:
    		    	if (textHi.hasClass('animated bounce')) {
        				textHi.removeClass('animated bounce');
        				textName.addClass('animated bounce');
    				}
        			else {
    					textHi.addClass('animated bounce');
    				}
    		}
    			
    	}, 2000);
        
     // Cancel interval on page changes
    	$scope.$on('$destroy', function(){
    	    if (angular.isDefined(promise)) {
    	        $interval.cancel(promise);
    	        promise = undefined;
    	    }
    	});
        
        init();

        function init(){
        	$log.info("*** home view Controller Init ***");
        }

    }

})();