/**
 * Pin
 * @namespace mappl2.pins.directives 
 */
(function() {
	'use strict';
	
	angular
		.module('mappl2.pins.directives')
		.directive('pin', pin);
		
	/**
	 * @namespace Pin 
	 */
	function pin() {
		/** @name directive
		 * @desc The directive to be returned
		 * @memberOf mappl2.pins.directives.Pin 
		 */
		var directive = {
			restrict: 'E',
			scope: {
				pin:'='
			},
			templateUrl: '/static/templates/pins/pin.html'
		};
		
		return directive;
	}
})();
