/** 
 * Board
 * @namespace mappl2.boards.directives 
 */
(function() {
	'use strict';
	
	angular
		.module('mappl2.boards.directives')
		.directive('board', board);
		
	/**
	 * @namespace Board 
	 */
	function board() {
		/**
		 * @name directive
		 * @desc The directive to be returned 
		 * @memberOf mappl2.boards.directives.Board 
		 */
		var directive = {
			restrict: 'E',
			scope: {
				board: '='
			},
			templateUrl: '/static/templates/boards/board.html'
		};
		
		return directive;
	}
})();
