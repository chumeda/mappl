/**
 * Boards
 * @namespace mappl2.boards.directives 
 */
(function() {
	'use strict';
	
	angular
		.module('mappl2.boards.directives')
		.directive('boards', boards);
		
	/**
	 * @namespace Boards 
	 */
	function boards() {
		/**
		 * @name directive 
		 * @desc The directive to be returned
		 * @memberOf mappl2.boards.directives.Boards 
		 */
		var directive = {
			controller: 'BoardsController',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {
				boards: '='
			},
			templateUrl: '/static/template/boards/boards.html'
		};
		
		return directive;
	}
})();
