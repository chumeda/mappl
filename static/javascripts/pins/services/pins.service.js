/**
 * Posts
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
			get: get
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
		function create(title, content, image, latitude, longitude, link) {
			console.log(content + ' and ' + image);
			return $http.post('/api/v1/pins/', {
				title: title,
				content: content,
				image: image,
				latitude: latitude,
				longitude: longitude,
				link: link
			});
		}
		
		/**
		 * @name get
		 * @desc Get the Pins og a given user
		 * @param {string} username The username to get Pins for
		 * @returns {Promise}
		 * @memberOf mappl2.pins.services.pins 
		 */
		function get(username) {
			return $http.get('/api/v1/accounts/' + username + '/pins/');
		}
	}
})();
