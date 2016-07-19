/** IndexController
 * @namespace mappl2.layout.controllers 
 */
(function() {
	'use strict';
	
	angular
		.module('mappl2.layout.controllers')
		.controller('IndexController', IndexController);
		
	IndexController.$inject = ['$scope', 'Authentication', 'Pins', 'Snackbar'];
	
	/**
	 * @namespace IndexController 
	 */
	function IndexController($scope, Authentication, Pins, Snackbar) {
		var vm = this;
		
		vm.isAuthenticated = Authentication.isAuthenticated();
		vm.pins = [];
		
		activate();
		
		/**
		 * @name activate
		 * @desc Actions to be performed when this controller instantiated
		 * @memberOf mappl2.layout.controllers.IndexController 
		 */
		function activate() {
			alert('inside index.controller.js');
			Pins.all().then(pinsSuccessFn, pinsErrorFn);
			
			$scope.$on('pin.created', function(event, pin) {
				vm.pins.unshift(pin);
			});
			
			$scope.$on('pin.created.error', function() {
				vm.pins.shift();
			});
			
			/** 
			 * @name pinSuccessFn
			 * @desc Update pins array on view
			 */
			function pinsSuccessFn(data, status, headers,config) {
				//alert(data.data);
				vm.pins = data.data;
			}
			
			/**
			 * @name pinsErrorFn
			 * @desc Show snackbar with error 
			 */
			function pinsErrorFn(data, status, headers, config) {
				Snackbar.error(data.error);
			}
		}
	}
})();
