/**
 * PinsController
 * @namespace mappl2.pins.controllers 
 */
(function() {
	'use strict';
	
	angular
		.module('mappl2.pins.controllers')
		.controller('PinsController', PinsController);
		
	PinsController.$inject = ['$scope', 'ngDialog', 'Boards', '$location'];
	
	/**
	 * @namespace PinsController 
	 */
	function PinsController($scope, ngDialog, Boards, $location) {

		var vm = this;
		
		vm.columns = [];
		
		activate();
		
		$scope.showPin = function(pin) {
			//alert(pin.board);
			ngDialog.open({
				template: '/static/templates/pins/show-pin.html',
				data: {
					title: pin.title, 
					image: pin.image,
					link: pin.link,
					latitude: pin.latitude,
					longitude: pin.longitude,
					author: pin.author,
					content: pin.content,
					board: pin.board,
					location: pin.location,
					mapsURL: pin.mapsURL,
					usPOC: pin.usPOC,
					hnPOC: pin.hnPOC,
					mgrs: pin.mgrs
				}
			});
		};
		
		$scope.openBoardFromPin = function(board) {
			//alert('openBoardFromPin' + board.id);
			Boards.setBoard(board);
			$location.path('/boards/' +  board.id);
		};
		
		/**
		 * @name activate
		 * @desc Actions to be performed when this controller is instantiated 
		 * @memberOf mappl2.pins.controllers.PinsController
		 */
		function activate() {
			//alert('inside pins.controller.js');
			console.log("$scope.pins" + toString($scope.pins));
			$scope.$watchCollection(function() {return $scope.pins; }, render);
			//$scope.$watch(function() { return $(window).width(); }, resizeRender);
		}
		
		
		/**
		 * @name calculateNumberOfColumns
		 * @desc Calculate number of columns based on screen width
		 * @returns {Number} The number of columns containing Pins
		 * @memberOf mappl2.pins.controllers.PinsControllers 
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
		 * @desc Am algorithm for approximating which column is shortest
		 * @retyrns The index of the shortest column
		 * @memberOf mappl2.pins.controllers.PinControllers 
		 */
		function approximateShortestColumn() {
			var scores = vm.columns.map(columnMapFn);
			console.log("scores" +  scores.indexOf(Math.min.apply(this, scores)));
			return scores.indexOf(Math.min.apply(this, scores));
			
			/**
			 * @name columnMapFn
			 * @desc A map function for scoring heights
			 * @returns the approximately normalized height of a given column 
			 */
			
			function columnMapFn(column) {
				var lengths = column.map(function(element) {
					console.log("element" + element.title);
					return element.title.length;
				});
				console.log("lengths" + lengths.reduce(sum, 0) * column.length);
				return lengths.reduce(sum, 0) * column.length;
			} 
			
			/**
			 * @name sum
			 * @desc Sums two numbers
			 * @params {Number} m The first number to be summed
			 * @params {Number} n T.he second number to be summed
			 * @returns The sum of two numbers 
			 */
			function sum(m,n) {
				return m + n;
			}
		}
		
		/**
		 * @name render
		 * @desc Render Pins into columns of approximately equal height
		 * @param {Array} current The current value of 'vm.pins
		 * @param {Array} original The value of vm.pins before it was update
		 * @memberOf mappl2.pins.controllers.PinsControllers 
		 */
		
		function render(current, original) {
			if(current !== original) {
				vm.columns = [];
				
				for(var i=0; i<calculateNumberOfColumns(); ++i) {
					vm.columns.push([]);
					console.log("i "+i);
				}
				
				for(var i=0; i<current.length; ++i) {
					var column = approximateShortestColumn();
					vm.columns[column].push(current[i]);
				}
			}
		}
		
		/**
		 *@name resizeRender
		 * @desc Renders pins into columns of approximately equal height when window is resized
		 * @param {number} newSize The new window size number
		 * @param {number} oldSize The current window size updated
		 * @memberOf mappl2.pins.controllers.PinsControllers
		 */
		
		function resizeRender(newSize, oldSize) {
			if(newSize !== oldSize) {
				vm.columns = [];
				
				for (var i = 0; i < calculateNumberOfColumns(); ++i) {
					vm.columns.push([]);
				}
				
				// Fill columns with the current value of pin
				for(var i = 0; i < $scope.pins.length; ++i) {
					var column = approximateShortestColumn();
					vm.columns[column].push($scope.pins[i]);
				} 
			}
			
		} 
		
	}

})();
		
