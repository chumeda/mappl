/**
 * Navbar Controller
 * @namespace mappl2.layout.controllers 
 */
(function() {
	'use strict';
	
	angular
		.module('mappl2.layout.controllers')
		.controller('NavbarController', NavbarController);
		
	NavbarController.$inject = ['$scope', 'Authentication'];
	
	/**
	 * @namespace NavbarController 
	 */
	function NavbarController($scope, Authentication) {
		var vm = this;
		
		vm.logout = logout;
		
		/**
		 * @name logout
		 * @desc log the user out
		 * @memberOf mappl2.layout.controllers.NavbarController 
		 */
		function logout() {
			Authentication.logout();
		}
	}
})();
