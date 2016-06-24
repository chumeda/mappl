/**
 * NewPinController
 * @namespace mappl2.pins.controllers 
 */
(function() {
	'use strict';
	
	angular
		.module('mappl2.pins.controllers')
		.controller('NewPinController', NewPinController);
		
	NewPinController.$inject = ['$rootScope', '$scope', 'Authentication', 'Snackbar', 'Pins'];
	
	/**
	 * @namespace NewPinController 
	 */
	function NewPinController($rootScope, $scope, Authentication, Snackbar, Pins) {
		var vm = this;
		
		vm.submit = submit;
		
		/**
		 * @name submit
		 * @desc Create a new Pin
		 * @memberOf mappl2.pins.controllers.NewPinController 
		 */
		function submit() {
			$rootScope.$broadcast('pin.created', {
				title: vm.title,
				content: vm.content,
				image: vm.image,
				latitude: vm.latitude,
				longitude: vm.longitude,
				link: vm.link,
				author: {
					username: Authentication.getAuthenticatedAccount().username
				}
			});
			
			$scope.closeThisDialog();
			
			Pins.create(vm.title, vm.content, vm.image, vm.latitude, vm.longitude, vm.link).then(createPinSuccessFn, createPinErrorFn);
			
			/**
			 * @name createPinSuccessFn
			 * @desc Show snackbar with success message 
			 */ 
			 function createPinSuccessFn(data, status, headers, config){
			 	Snackbar.show('Success! Pin created');
			 }
			 
			 /**
			  * @name createPinErrorFn
			  * @desc  Propogate error event and show snackbar with error message
			  */
			 function createPinErrorFn(data, status, headers, config) {
			 	$rootScope.$broadcast('pin.created.error');
			 	Snackbar.error(data.error);
			 }
		}
	}
})();
