/**
 * NewBoardController
 * @namespace mappl2.boards.controllers 
 */
(function() {
	'use strict';
	
	angular 
		.module('mappl2.boards.controllers')
		.controller('NewBoardController', NewBoardController);
		
	NewBoardController.$inject = ['$rootScope', '$scope', 'Authentication', 'Snackbar', 'Boards'];
	
	/**
	 * @namespace NewBoardController 
	 */
	function NewBoardController($rootScope, $scope, Authentication, Snackbar, Boards) {
		var vm = this;
		
		vm.submit = submit;
		
		/**
		 * @name submit
		 * @desc Create a new Board
		 * @memberOf mappl2.Boards.controllers.NewBoardController 
		 */
		function submit() {
			$rootScope.$broadcast('board.created', {
				title: vm.title,
				description: vm.description,
				author: {
					username: Authentication.getAuthenticatedAccount().username
				}
			});
			
			$scope.closeThisDialog();
			alert(vm.description);
			Boards.create(vm.title, vm.description).then(createBoardSuccessFn, createBoardErrorFn);
			
			/**
			 * @name createBoardSuccessFn
			 * @desc Show snackbar with success message 
			 */
			function createBoardSuccessFn(data, status, headers, config) {
				Snackbar.show('Success! Board created.');
			}
			
			/**
			 * @name createBoardErrorFn
			 * @desc Propogate error event and show snackbar with error message
			 */
			function createBoardErrorFn(data, status, headers, config) {
				$rootScope.$broadcast('board.created.error');
				Snackbar.error(data.error);
			}
		}
	}
})();
