/**
 * ProfileController
 * @namespace mappl2.profiles.controllers 
 */


(function() {
	'use strict';
	
	angular
		.module('mappl2.profiles.controllers')
		.controller('ProfileController', ProfileController);
		
	ProfileController.$inject = ['$location', '$routeParams', 'Boards', 'Profile', 'Snackbar'];
	
	/**
	 * @namespace ProfileController 
	 */
	function ProfileController($location, $routeParams, Boards, Profile, Snackbar) {
		var vm = this;
		
		vm.profile = undefined;
		vm.boards = [];
		
		activate();
		
		/**
		 * @name activate
		 * @desc Actions to be performs when this controller is instantiated
		 * @memberOf mappl2.profiles.controller.ProfileController 
		 */
		function activate() {
			//alert("activate");
			var username = $routeParams.username;
			
			Profile.get(username).then(profileSuccessFn, profileErrorFn);
			Boards.get(username).then(boardsSuccessFn, boardsErrorFn);
			
			/**
			 * @name profileSuccessProfile
			 * @desc Update 'profile' on viewmodel 
			 */
			function profileSuccessFn(data, status, headers, config) {
				//alert("profilesuccess");
				vm.profile = data.data;
			}
			
			/** 
			 * @name profileErrorFn
			 * @desc redirect to index and show error Snackbar 
			 */
			function profileErrorFn(data, status, headers, config) {
				$location.url('/');
				Snackbar.error('That user does not exist.');
			}
			
			/**
			 * @name boardsSuccessFn
			 * @desc Update 'boards' on viewmodel 
			 */
			function boardsSuccessFn(data, status, headers, config) {
				vm.boards = data.data;
			}
			
			/**
			 * @name boardsErrorFn
			 * @desc Show error snackbar 
			 */
			function boardsErrorFn(data, status, headers, config) {
				Snackbar.error(data.data.error);
			}
		}
	}
})();
