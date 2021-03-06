/**
 * Profile
 *  @namespace mappl2.profiles.services 
 */
(function() {
	'use strict';
	
	angular
		.module('mappl2.profiles.services')
		.factory('Profile', Profile);
		
		Profile.$inject = ['$http'];
		
		/**
		 * @namespace Profile 
		 */
		function Profile($http) {
			/**
			 * @name Profile
			 * @desc The factory to be returned
			 * @memberOf mappl2.profiles.services.Profile 
			 */
			var Profile = {
				destroy: destroy,
				get: get,
				update: update
			};
			
			return Profile;
			
			///////////////////////////
			
			/**
			 * @name destroy
			 * @desc Destros the given profile
			 * @param {Object} profile The profile to be destroyed
			 * @returns {Promise}
			 * @memberOf mappl2.profiles.services.Profile 
			 */
			function destroy(profile) {
				//alert(profile.username);
				return $http.delete('/api/v1/accounts/' + profile.username + '/');
			}
			
			/** 
			 * @name get
			 * @desc Gets the profile for the user with username 'username'
			 * @param {string} username The username of the user to fetch
			 * @returns {Promise}
			 * @memberOf mappl2.profiles.services.Profile 
			 */
			function get(username) {
				return $http.get('/api/v1/accounts/' + username + '/');
			}
			
			/**
			 * @name update
			 * @desc Update the given profile
			 * @param {Object} profile The profile to be updated
			 * @returns {Promise}
			 * @memberOf mappl2.profiles.services.Profile 
			 */
			function update(profile) {
				//alert(profile.username + profile.email);
				return $http.put('/api/v1/accounts/' + profile.username + '/', profile);
			}
		}
})();
