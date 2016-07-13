/**
 * ViewBoardController
 * @namespace mappl2.boards.controllers 
 */
(function() {
	'use strict';
	
	angular
		.module('mappl2.boards.controllers')
		.controller('ViewBoardController', ViewBoardController);
		
	ViewBoardController.$inject = ['$scope', 'Authentication', 'Pins', 'Boards', 'Snackbar'];
	
	/**
	 * @namespace ViewBoardController 
	 */
	function ViewBoardController($scope, Authentication, Pins, Boards, Snackbar) {
		var vm = this;
		
		vm.isAuthenticated = Authentication.isAuthenticated();
		vm.pins = [];
		vm.board = Boards.getBoard();
		
		activate();
		
		/**
		 * @name activate
		 * @desc Actions to be performed when this controller is instantiated
		 * @memberOf mappl2.boards.controller.ViewBoardController 
		 */
		function activate() {
			alert(vm.board.description);
		}
	}
})();
