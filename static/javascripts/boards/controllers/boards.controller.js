/**
 * BoardsController
 * @namespace mappl2.boards.controllers 
 */
(function() {
	'use strict';
	
	angular
		.module('mappl2.boards.controllers')
		.controller('BoardsController', BoardsController);
		
	BoardsController.$inject = ['$scope', 'Boards', '$location'];
	
	/**
	 * @namespace BoardsController 
	 */
	function BoardsController($scope, Boards, $location) {
		var vm = this;
		
		vm.columns = [];
		
		activate();
		
		$scope.openBoard = function(board) {
			Boards.setBoard(board);
			alert(Boards.getBoard().author.username);
			$location.path('/' + board.author.username + '/' + board.title);
		};
		
		/**
		 * @name activate
		 * @desc Actions to be performed when this controller is instantiated
		 * @memberOf mappl2.boards.controllers.BoardsController 
		 */
		function activate() {
			$scope.$watchCollection(function() {return $scope.boards;}, render);
			$scope.$watch(function(){return $(window).width();}, render);
		}
		
		/**
		 * @name calculateNumberOfColumns
		 * @desc Calculate number of columns based on screen width 
		 * @returns {Number} The number of columns containing Boards
		 * @memberOf mappl2.boards.controllers.BoardsControllers
		 */
		function calculateNumberOfColumns() {
			var width = $(window).width();
			
			if(width >= 1200) {
				return 4;
			} else if (width >= 992) {
				return 3;
			} else if (width >= 768) {
				return 2;
			} else {
				return 1;
			}
		}
		
		/**
		 * @name approximateShortestColumn
		 * @desc An algorithm for approximating which column is shortest
		 * @returns The index of the shortest column 
		 * @memberOf mappl2.boards.controllers.BoardsController
		 */
		function approximateShortestColumn() {
			var scores = vm.columns.map(columnMapFn);
			
			return scores.indexOf(Math.min.apply(this, scores));
			
			/**
			 * @name columnMapFn
			 * @desc A map function for scoring columns heights
			 * @returns The approximately normalized height of given column 
			 */
			function columnMapFn(column) {
				var lengths = column.map(function(element) {
					return element.description.length;
				});
				
				return lengths.reduce(sum, 0)*column.length;
			}
			
			/**
			 * @name sum
			 * @desc Sums two numbers
			 * @params {Number} m The first number to be summed
			 * @params {Number} n The second number to be summed
			 * @returns The sum of two numbers
			 */
			function sum(m,n) {
				return m+n;
			}
		}
		
		/**
		 * @name render
		 * @desc Renders boards into columns of approximately equal height 
		 * @param {Array} current The current value of 'vm.boards'
		 * @param {Array} original The valus of 'vm.boards' befor it was updated
		 * @memberOf mappl2.boards.controllers.BoardsController 
		 */
		function render(current, original) {
			if(current !== original) {
				vm.columns = [];
				
				for(var i=0; i<calculateNumberOfColumns(); ++i) {
					vm.columns.push([]);
				}
				
				for(var i=0; i< current.length; ++i) {
					var column = approximateShortestColumn();
					
					vm.columns[column].push(current[i]);
				}
			}
		}
	}
})();
