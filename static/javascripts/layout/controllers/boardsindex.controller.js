/** 
 * BoardsController
 * @namespace mappl2.layout.controllers 
 */ 
 (function() {
 	'use strict';
 	
 	angular
 		.module('mappl2.layout.controllers')
 		.controller('BoardsIndexController', BoardsIndexController);
 		
 	BoardsIndexController.$inject = ['$scope', 'Authentication', 'Boards', 'Snackbar'];
 	
 	/**
 	 * @namespace BoardsIndexController 
 	 */
 	function BoardsIndexController($scope, Authentication, Boards, Snackbar) {
 		var vm = this;
 		
 		vm.isAuthenticated = Authentication.isAuthenticated();
 		vm.boards = [];
 		
 		activate();
 		
 		/**
 		 * @name activate
 		 * @desc Actions to be performed when this controller is instantiated
 		 * @memberOf mappl2.layout.controller.BoardsIndexController 
 		 */
 		function activate() {
 			
 			Boards.all().then(boardsSuccessFn, boardsErrorFn);
 			
 			$scope.$on('board.created', function(event, board) {
 				vm.boards.unshift(board);
 			});
 			$scope.$on('board.created.error', function () {
 				vm.boards.shift();
 			});
 			
 			/**
 			 * @ name boardSuccessFn
 			 * @desc Update boards array on view 
 			 */
 			function boardsSuccessFn(data, status, headers, config) {
 				vm.boards = data.data;
 			}
 			
 			/**
 			 * @name boardsErrorFn
 			 * @desc Show snackbar with error 
 			 */
 			function boardsErrorFn(data, status, header, config) {
 				Snackbar.error(data.error);
 			}
 		}
 	}
 })();
