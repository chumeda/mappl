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
		vm.map = map;
		
		activate();
		
		/**
		 * @name activate
		 * @desc Actions to be performed when this controller is instantiated
		 * @memberOf mappl2.boards.controller.ViewBoardController 
		 */
		function activate() {
			//alert(vm.board.author.username);
			Pins.getByBoard(vm.board.id).then(pinsSuccessFn, pinsErrorFn);
			//Pins.all().then(pinsSuccessFn, pinsErrorFn);
			
			/** 
			 * @name pinSuccessFn
			 * @desc Update pins array on view
			 */
			function pinsSuccessFn(data, status, headers,config) {
				//alert('pinsSuccessFn, ViewBoardController'+ data.data);
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
		
		function map() {
			//alert(vm.board);
			Boards.mapBoard(vm.board);
		}
		
	}
})();
