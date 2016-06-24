/**
 * Pins
 * @namespace mappl2.pins.directives 
 */
(function() {
	'use strict';
	
	angular
		.module('mappl2.pins.directives')
		.directive('pins', pins);
		
	/**
	 * @namespace Pins 
	 */
	function pins() {
		/**
		 * @name directive
		 * @desc The directive to be returned
		 * @memberOf mappl2.pins.directives.Pins 
		 */
		var directive = {
			controller: 'PinsController',
			controllerAs: 'vm',
			//angular: restrict to E for element
			restrict:'E',
			scope: {
				pins: '='
			},
			templateUrl: '/static/templates/pins/pins.html'
		};
		
		return directive;
	}
})();
