/**
 * Boards
 * @namespace mappl2.boards.services 
 */
(function() {
	'use strict';
	
	angular
		.module('mappl2.boards.services')
		.factory('Boards', Boards);
		
	Boards.$inject = ['$http', '$window'];
	
	/**
	 * @namespace Boards
	 * returns {Factory} 
	 */
	function Boards($http, $window) {
		var savedBoard = {};
		var Boards = {
			all: all,
			create: create,
			get: get,
			setBoard: setBoard,
			getBoard: getBoard,
			mapBoard: mapBoard
		};
		
		return Boards;
		
		//////////////////
		
		/**
		 * @name all
		 * @desc Get all Boards
		 * @returns Promise 
		 * @memberOf mappl2.boards.services.Boards
		 */
		function all() {
			return $http.get('/api/v1/boards/');
		}
		
		/**
		 * @name create 
		 * @desc create a new board
		 * @param {string} title The title of the new boards
		 * @param {string} description The description of the new board
		 * @returns {Promise}
		 * @memberOf mappl2.boards.services.Boards
		 */
		function create(title, description) {
			console.log(title + " and " + description);
			return $http.post('/api/v1/boards/', {
				title: title,
				description: description
			});
		}
		
		/**
		 * @name get
		 * @desc get the boards of a given user
		 * @parame {string} username The username to get boards for
		 * @returns {Promise}
		 * @memberOf mappl2. boards.services.boards 
		 */
		function get(username) {
			return $http.get('/api/v1/accounts/' + username + '/boards/');
		}
		
		function setBoard(board) {
			savedBoard = board;
		}
		
		function getBoard() {
			return savedBoard;
		}
		
		function mapBoard(board) {
			//alert('boardid' + board.id);
			$window.open('http://localhost:8000/api/v1/boards/'+board.id+'/makeKML/');
		}
	}
})();
