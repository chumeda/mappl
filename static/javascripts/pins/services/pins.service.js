/**
 * Pins
 * @namespace mappl2.pins.services 
 */
(function() {
	'use strict';
	
	angular
		.module('mappl2.pins.services')
		.factory('Pins', Pins);
		
	Pins.$inject = ['$http'];
	
	/**
	 * @namespace Pins
	 * @returns {Factory} 
	 */
	function Pins($http) {
		var Pins = {
			all: all,
			create: create,
			get: get,
			getByBoard: getByBoard
		};
		return Pins;
		
		///////////////////////
		
		/**
		 * @name all
		 * @desc Get all Pins
		 * @returns {Promise}
		 * @memberOf mappl2.pins.services.Pins 
		 */
		function all() {
			return $http.get('/api/v1/pins/');
		}
		
		/**
		 * @name create
		 * @desc Create a new Pin
		 * @param {string} title of the new Pin
		 * @param {string} content The content of a new Pin
		 * @param {string} image The name of the image of a Pin
		 * @param {decimal} latitude of the location of topic of pin
		 * @param {decimal} longitude of the location of the topin of pin
		 * @param {string} link of the website for the pin contents
		 * @returns {Promise}
		 * @memberOf mappl2.pins.services.Pins 
		 */
		function create(title, content, image, latitude, longitude, link, board,
			location, mapsURL, usPOC, hnPOC, mgrs) {
			console.log("hi");
			console.log(board.id);
			
			return $http.post('/api/v1/pins/', {
				board: board.id,
				title: title,
				content: content,
				image: image,
				latitude: latitude,
				longitude: longitude,
				link: link,
				location: location,
				usPOC: usPOC,
				hnPOC: hnPOC,
				mgrs: mgrs
			});
		}
		
		/**
		 * @name get
		 * @desc Get the Pins for a given user
		 * @param {string} username The username to get Pins for
		 * @returns {Promise}
		 * @memberOf mappl2.pins.services.pins 
		 */
		function get(username) {
			var promise = $http.get('/api/v1/accounts/' + username + '/pins/');
			console.log('promise'+ promise);
			return promise;
		}
		
		/**
		 * @name getByBoard
		 * @descc Get the Pins for the given board
		 * @param {int} id The id of the board to get the Pins for
		 * @returns {Promise}
		 * @memberOf mappl2.pins.services.pins 
		 */
		function getByBoard(id) {
			var promise = $http.get('/api/v1/boards/' + id + '/pins/');
			console.log('board promise' + '/api/v1/boards/' + id + '/pins/');
			return promise;
		}
	}
})();
